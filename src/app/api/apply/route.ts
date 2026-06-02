import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AiReview = {
  overallFit: "STRONG" | "GOOD" | "WEAK" | "PASS";
  recommendation: "INTERVIEW" | "HOLD" | "PASS";
  industryScore: number;
  bdScore: number;
  motivationScore: number;
  summary: string[];
  redFlags: string[];
};

const FIT_COLORS: Record<string, string> = {
  STRONG: "#004D43",
  GOOD: "#2E7D32",
  WEAK: "#E65100",
  PASS: "#C62828",
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
    const currentRole = get("currentRole");
    const company = get("company");
    const location = get("location");
    const phone = get("phone");
    const q5 = get("q5");
    const q6 = get("q6");
    const q7 = get("q7");
    const q8 = get("q8");
    const q9 = get("q9");
    const q10 = get("q10");

    // Step 1 — validate
    if (!name || !email || !linkedin) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Resume → base64
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
      const prompt = `You are evaluating a job application for a Business Development & CEO Co-Founder position at Kevda Bioworks — a premium wet-lab CRO serving VC-backed biotech and biopharma companies. Operations in Bangalore, India with US presence in Boston, MA. Scientific leadership has backgrounds at world-leading biotech companies and research universities. The company is operational but pre-revenue. The role requires driving new client acquisition, owning client relationships, understanding the CRO ecosystem, and comfort with equity-only compensation to start.

CANDIDATE CONTEXT
Current role: ${currentRole || "Not provided"}
Company: ${company || "Not provided"}

CANDIDATE ANSWERS
Q5 — Relevant background:
${q5 || "(blank)"}

Q6 — Relationships with buyers/influencers of outsourced research services:
${q6 || "(blank)"}

Q7 — Example of a client relationship won/grown/managed in a technical or scientific market:
${q7 || "(blank)"}

Q8 — Why equity-based, no-salary structure is realistic/attractive for them now:
${q8 || "(blank)"}

Q9 — First 90 days identifying and engaging potential clients:
${q9 || "(blank)"}

Q10 — Anything else:
${q10 || "(blank)"}

SCORING CRITERIA
- Industry relevance: do they know biotech/pharma/CRO/CDMO services?
- Buyer familiarity: do they understand who buys outsourced research services?
- BD credibility: have they sold, partnered, managed accounts, or opened doors?
- Founder fit: are they realistic about no salary and equity-based upside?
- Execution thinking: can they form a practical first 90-day plan?
- Seniority: do they sound credible with founders, CSOs, and scientific leaders?

Be direct. STRONG = genuinely impressive fit. PASS = clear mismatch. Do not be generous with STRONG.

Respond ONLY with valid JSON in this exact format — no markdown, no preamble:
{
  "overallFit": "STRONG" | "GOOD" | "WEAK" | "PASS",
  "recommendation": "INTERVIEW" | "HOLD" | "PASS",
  "industryScore": 1-5,
  "bdScore": 1-5,
  "motivationScore": 1-5,
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
          model: "claude-sonnet-4-20250514",
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
      ? `New Application: ${name} — ${aiReview.overallFit} · ${aiReview.recommendation}`
      : `New Application: ${name} — Review Pending`;

    const html = buildEmailHtml({
      name,
      email,
      phone,
      linkedin,
      location,
      currentRole,
      company,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      aiReview,
    });

    type EmailPayload = {
      from: string;
      to: string;
      subject: string;
      html: string;
      attachments?: { filename: string; content: string }[];
    };

    const emailPayload: EmailPayload = {
      from: "Kevda Careers <careers@kevdabioworks.com>",
      to: "joel@kevdabioworks.com",
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

function buildEmailHtml(d: {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  currentRole: string;
  company: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  aiReview: AiReview | null;
}): string {
  const a = d.aiReview;

  const roleLine = [d.currentRole, d.company].filter(Boolean).join(" at ");

  let aiSection: string;
  if (a) {
    const fitColor = FIT_COLORS[a.overallFit] || "#555";
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

        <div style="margin-bottom:8px;font-size:13px;color:#222;">
          <span style="display:inline-block;width:180px;color:#555;">Industry Knowledge</span>
          <span style="color:#D4B57C;font-size:16px;letter-spacing:2px;">${stars(
            a.industryScore
          )}</span>
        </div>
        <div style="margin-bottom:8px;font-size:13px;color:#222;">
          <span style="display:inline-block;width:180px;color:#555;">BD Experience</span>
          <span style="color:#D4B57C;font-size:16px;letter-spacing:2px;">${stars(
            a.bdScore
          )}</span>
        </div>
        <div style="margin-bottom:20px;font-size:13px;color:#222;">
          <span style="display:inline-block;width:180px;color:#555;">Motivation</span>
          <span style="color:#D4B57C;font-size:16px;letter-spacing:2px;">${stars(
            a.motivationScore
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
    d.phone ? detailField("Phone", esc(d.phone)) : "",
    detailField("LinkedIn", linkedinHtml),
    detailField("Location", esc(d.location)),
    detailField("Background (Q5)", esc(d.q5)),
    detailField("Buyer Relationships (Q6)", esc(d.q6)),
    detailField("Client Example (Q7)", esc(d.q7)),
    detailField("Equity Comfort (Q8)", esc(d.q8)),
    detailField("First 90 Days (Q9)", esc(d.q9)),
    d.q10 ? detailField("Anything Else (Q10)", esc(d.q10)) : "",
  ].join("");

  return `
  <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
    <div style="background:#004D43;padding:32px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#D4B57C;margin-bottom:12px;">New Application — BD/CEO Co-Founder</div>
      <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:6px;">${esc(
        d.name
      )}</div>
      ${
        roleLine
          ? `<div style="font-size:14px;color:#bcd1cc;">${esc(roleLine)}</div>`
          : ""
      }
    </div>

    ${aiSection}

    <div style="padding:32px;">
      ${details}
    </div>

    <div style="background:#f4f7f6;padding:18px 32px;font-size:12px;color:#888;">
      Kevda Bioworks · BD/CEO Co-Founder Application · Resume attached (if provided)
    </div>
  </div>`;
}
