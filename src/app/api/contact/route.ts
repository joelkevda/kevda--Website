import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, title, company, email, serviceInterest, targetTimeline, message, ndaRequested } = body;

    if (!name || !company || !email || !serviceInterest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "noreply@kevdabioworks.com",
      to: "info@kevdabioworks.com",
      replyTo: email,
      subject: `New Contact Form: ${name} — ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Name</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Title</td><td style="padding:8px">${escapeHtml(title || "—")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Company</td><td style="padding:8px">${escapeHtml(company)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Service Interest</td><td style="padding:8px">${escapeHtml(serviceInterest)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Target Timeline</td><td style="padding:8px">${escapeHtml(targetTimeline || "—")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">NDA Requested</td><td style="padding:8px">${ndaRequested ? "Yes" : "No"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
        </table>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
