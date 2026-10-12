import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AiReview = {
  overallFit: "STRONG" | "GOOD" | "WEAK" | "PASS";
  recommendation: "CALL" | "HOLD" | "PASS";
  networkScore: number;   // Q1
  sellingScore: number;   // Q2
  executionScore: number; // Q3
  motivationScore: number;// Q5
  eligibility: "YES" | "NO" | "UNCLEAR"; // Q4
  summary: string[];
  redFlags: string[];
};

const FIT_COLORS: Record<string, string> = {
  STRONG: "#004D43",
  GOOD: "#2E7D32",
  WEAK: "#E65100",
  PASS: "#C62828",
};

const ELIGIBILITY_COLORS: Record<string, string> = {
  YES: "#2E7D32",
  NO: "#C62828",
  UNCLEAR: "#E65100",
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeUrl(u: string): string {
  try {
    const parsed = new URL(u.startsWith("http") ? u : `https://${u}`);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return "#";
    return parsed.toString();
  } catch {
    return "#";
  }
}

function stars(n: number): string {
  const score = Math.max(0, Math.min(5, Math.round(n || 0)));
  return "★".repeat(score) + "☆".repeat(5 - score);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const get = (k: string) => ((formData.get(k) as string) || "").trim();

    const name = get("name");
    const email = get("email");
    const linkedin = get("linkedin");
    const position = get("position");
    const field = get("field");
    const location = get("location");
    const q1 = get("q1");
    const q2 = get("q2");
    const q3 = get("q3");
    const q4 = get("q4");
    const q5 = get("q5");

    // Step 1 — validate
    if (!name || !email || !linkedin || !position || !q1 || !q2 || !q3 || !q4 || !q5) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Resume → base64 (optional)
    const resumeFile = formData.get("resume") as File | null;
    let resumeName: string | null = null;
    let resumeBase64: string | null = null;
    if (resumeFile && resumeFile.size > 0) {
      resumeName = resumeFile.name;
      resumeBase64 = Buffer.from(await resumeFile.arrayBuffer()).toString(
        "base64"
      );
    }

    // Step 2 — AI review (non-blocking)
    let aiReview: AiReview | null = null;
    try {
      const prompt = `You are screening applicants for a commission-only Business Development Associate role at Kevda Bio, a wet-lab CRO with commercial operations in Boston, MA and lab execution in Bangalore, India. The first service is sequence-to-mRNA: designed, IVT-produced, QC'd mRNA with a data package. Research and preclinical only.

The role: postdocs and PhD candidates identify labs and early-stage biotech teams that order mRNA, LNP or assay work from outside vendors, make a warm introduction, and earn 20% of invoiced revenue on every project they source. No salary, no hours, no quota. What we need is someone with a real network, the nerve to start a conversation with a lab they don't work in, and the time to actually do it.

CANDIDATE
Position: ${position || "Not provided"}
Field: ${field || "Not provided"}
Location: ${location || "Not provided"}

ANSWERS
Q1 — Three targets and why they need outside mRNA/LNP/assay work:
${q1}

Q2 — A time they got someone outside their lab to act:
${q2}

Q3 — Hours per week and first 30 days:
${q3}

Q4 — Permitted to earn outside income (COI policy + visa):
${q4}

Q5 — Why BD, and what makes it worth it in six months:
${q5}

SCORE 1–5
- networkScore: Q1. Are the three targets specific and real (named labs, PIs, companies) with a plausible reason each needs outside work? Generic answers ("many labs use mRNA") score 1–2.
- sellingScore: Q2. Did they actually persuade someone and get an outcome? Describing their own lab work is not selling.
- executionScore: Q3. Is the hours figure honest and the 30-day plan concrete (who they'll contact, in what order)?
- motivationScore: Q5. Is the reason specific to them and realistic about what six months of commission-only work looks like?

eligibility: from Q4. "YES" only if they clearly state they are permitted. "NO" if they say no or describe a visa or policy that bars outside income. "UNCLEAR" otherwise. Eligibility NO is an automatic PASS.

overallFit: STRONG only if networkScore ≥ 4 and sellingScore ≥ 3 and eligibility is YES. Do not be generous with STRONG.
recommendation: CALL for STRONG and most GOOD. HOLD for WEAK with one strong score. PASS otherwise.

Respond ONLY with valid JSON in this exact format — no markdown, no preamble:
{
  "overallFit": "STRONG" | "GOOD" | "WEAK" | "PASS",
  "recommendation": "CALL" | "HOLD" | "PASS",
  "networkScore": 1-5,
  "sellingScore": 1-5,
  "executionScore": 1-5,
  "motivationScore": 1-5,
  "eligibility": "YES" | "NO" | "UNCLEAR",
  "summary": ["observation 1", "observation 2", "observation 3"],
  "redFlags": ["flag 1"] or []
}`;

      const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY || "",
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 800,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (aiRes.ok) {
        const data = await aiRes.json();
        const text: string = data?.content?.[0]?.text ?? "";
        const jsonStart = text.indexOf("{");
        const jsonEnd = text.lastIndexOf("}");
        if (jsonStart !== -1 && jsonEnd !== -1) {
          aiReview = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
        }
      }
    } catch {
      aiReview = null;
    }

    // Step 3 — email
    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject = aiReview
      ? `BD Associate: ${name} — ${aiReview.overallFit} · ${aiReview.recommendation} · Eligibility ${aiReview.eligibility}`
      : `BD Associate: ${name} — Review Pending`;

    const html = buildEmailHtml({
      name,
      email,
      linkedin,
      position,
      field,
      location,
      q1,
      q2,
      q3,
      q4,
      q5,
      aiReview,
    });

    type EmailPayload = {
      from: string;
      to: string[];
      replyTo: string;
      subject: string;
      html: string;
      attachments?: { filename: string; content: string }[];
    };

    const emailPayload: EmailPayload = {
      from: "Kevda Careers <careers@kevda.bio>",
      to: ["joel@kevda.bio", "aaron@kevda.bio"],
      replyTo: "joel@kevda.bio",
      subject,
      html,
    };

    if (resumeBase64 && resumeName) {
      emailPayload.attachments = [
        { filename: resumeName, content: resumeBase64 },
      ];
    }

    await resend.emails.send(emailPayload);

    // Step 4
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}

function detailField(label: string, valueHtml: string): string {
  return `
    <div style="margin-bottom:20px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin-bottom:5px;">${esc(
        label
      )}</div>
      <div style="font-size:14px;color:#222;line-height:1.6;white-space:pre-wrap;">${valueHtml}</div>
    </div>`;
}

function starRow(label: string, n: number, marginBottom = 8): string {
  return `
        <div style="margin-bottom:${marginBottom}px;font-size:13px;color:#222;">
          <span style="display:inline-block;width:180px;color:#555;">${esc(label)}</span>
          <span style="color:#D4B57C;font-size:16px;letter-spacing:2px;">${stars(n)}</span>
        </div>`;
}

function buildEmailHtml(d: {
  name: string;
  email: string;
  linkedin: string;
  position: string;
  field: string;
  location: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  aiReview: AiReview | null;
}): string {
  const a = d.aiReview;

  let aiSection: string;
  if (a) {
    const fitColor = FIT_COLORS[a.overallFit] || "#555";
    const eligibilityColor = ELIGIBILITY_COLORS[a.eligibility] || "#555";
    const summaryItems = (a.summary || [])
      .map(
        (s) =>
          `<li style="margin-bottom:6px;">${esc(s)}</li>`
      )
      .join("");
    const redFlagItems = (a.redFlags || [])
      .map(
        (f) =>
          `<li style="margin-bottom:6px;color:#C62828;">${esc(f)}</li>`
      )
      .join("");

    aiSection = `
      <div style="background:#f4f7f6;padding:28px 32px;">
        <div style="margin-bottom:18px;">
          <span style="display:inline-block;background:${fitColor};color:#fff;font-size:12px;font-weight:600;letter-spacing:0.06em;padding:6px 14px;border-radius:4px;">${esc(
      a.overallFit
    )}</span>
        </div>
        <div style="font-size:22px;font-weight:700;color:#004D43;margin-bottom:24px;">→ ${esc(
          a.recommendation
        )}</div>

        ${starRow("Network (Q1)", a.networkScore)}
        ${starRow("Selling (Q2)", a.sellingScore)}
        ${starRow("Execution (Q3)", a.executionScore)}
        ${starRow("Motivation (Q5)", a.motivationScore)}
        <div style="margin-bottom:20px;font-size:13px;color:#222;">
          <span style="display:inline-block;width:180px;color:#555;">Eligibility (Q4)</span>
          <span style="color:${eligibilityColor};font-size:14px;font-weight:700;letter-spacing:0.06em;">${esc(
            String(a.eligibility || "")
          )}</span>
        </div>

        ${
          summaryItems
            ? `<ul style="margin:0 0 16px;padding-left:20px;font-size:14px;color:#222;line-height:1.6;">${summaryItems}</ul>`
            : ""
        }
        ${
          redFlagItems
            ? `<div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#C62828;margin-bottom:6px;">Red Flags</div>
               <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.6;">${redFlagItems}</ul>`
            : ""
        }
      </div>`;
  } else {
    aiSection = `
      <div style="background:#f4f7f6;padding:28px 32px;">
        <div style="font-size:14px;color:#555;">AI review unavailable for this submission.</div>
      </div>`;
  }

  const linkedinHtml = `<a href="${esc(safeUrl(d.linkedin))}" style="color:#004D43;">${esc(
    d.linkedin
  )}</a>`;

  const details = [
    detailField("Email", esc(d.email)),
    detailField("LinkedIn", linkedinHtml),
    detailField("Position", esc(d.position)),
    detailField("Field", esc(d.field)),
    detailField("Location", esc(d.location)),
    detailField("Targets (Q1)", esc(d.q1)),
    detailField("Persuasion (Q2)", esc(d.q2)),
    detailField("Hours + 30 days (Q3)", esc(d.q3)),
    detailField("Eligibility (Q4)", esc(d.q4)),
    detailField("Motivation (Q5)", esc(d.q5)),
  ].join("");

  return `
  <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
    <div style="background:#004D43;padding:32px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#D4B57C;margin-bottom:12px;">New Application — BD Associate (Commission)</div>
      <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:6px;">${esc(
        d.name
      )}</div>
      ${
        d.position
          ? `<div style="font-size:14px;color:#bcd1cc;">${esc(d.position)}</div>`
          : ""
      }
      ${
        d.field
          ? `<div style="font-size:14px;color:#bcd1cc;">${esc(d.field)}</div>`
          : ""
      }
    </div>

    ${aiSection}

    <div style="padding:32px;">
      ${details}
    </div>

    <div style="background:#f4f7f6;padding:18px 32px;font-size:12px;color:#888;">
      Kevda Bio · BD Associate Application · Resume attached (if provided)
    </div>
  </div>`;
}
