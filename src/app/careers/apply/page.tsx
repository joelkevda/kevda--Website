"use client";

import { useState } from "react";

const TEAL = "#004D43";
const GOLD = "#D4B57C";
const PAGE_BG = "#F2F5F4";
const CARD_BG = "#ffffff";
const TEXT = "#222222";
const TEXT_2 = "#555555";
const ERROR = "#C62828";
const BORDER = "#e0e4e3";
const FONT = "'Space Grotesk', system-ui, -apple-system, Segoe UI, Roboto, sans-serif";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 15,
  fontWeight: 500,
  color: TEXT,
  marginBottom: 8,
};

const hintStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontStyle: "italic",
  color: TEXT_2,
  marginTop: -2,
  marginBottom: 10,
  lineHeight: 1.5,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: FONT,
  color: TEXT,
  background: "#fff",
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  outline: "none",
  boxSizing: "border-box",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 120,
  resize: "vertical",
  lineHeight: 1.6,
};

const fieldGap: React.CSSProperties = { marginBottom: 28 };

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: TEAL,
  marginBottom: 24,
  paddingBottom: 12,
  borderBottom: `1px solid ${BORDER}`,
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={fieldGap}>
      <label style={labelStyle}>{label}</label>
      {hint ? <span style={hintStyle}>{hint}</span> : null}
      {children}
    </div>
  );
}

export default function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to submit application.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      style={{
        background: PAGE_BG,
        minHeight: "100vh",
        fontFamily: FONT,
        color: TEXT,
        padding: "140px 20px 100px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <header style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: GOLD,
              margin: "0 0 16px",
            }}
          >
            Co-Founder Application
          </p>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 500,
              lineHeight: 1.1,
              margin: "0 0 16px",
              color: TEAL,
            }}
          >
            Business Development &amp; CEO
          </h1>
          <p style={{ fontSize: 15, color: TEXT_2, margin: 0, lineHeight: 1.6 }}>
            Kevda Bioworks · Boston, MA | Bangalore, India · Equity-based · Remote
          </p>
        </header>

        {submitted ? (
          <SuccessState />
        ) : (
          <>
            {/* Opening copy block */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 36px",
                marginBottom: 32,
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.7, margin: "0 0 18px", color: TEXT }}>
                This is not a traditional employee role. We are looking for a
                business-side co-founder — someone who can lead client
                acquisition, own client relationships, and eventually run
                day-to-day operations. The role is equity-based to start with no
                salary initially.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: TEXT }}>
                The questions below are brief. We only need enough context to
                decide whether a founder-level conversation makes sense. Strong
                applicants will be invited to that discussion directly.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "36px 36px 40px",
              }}
            >
              {/* Your Information */}
              <h2 style={sectionTitleStyle}>Your Information</h2>

              <Field label="Full name">
                <input name="name" type="text" required style={inputStyle} />
              </Field>

              <Field label="Email address">
                <input name="email" type="email" required style={inputStyle} />
              </Field>

              <Field label="Current role">
                <input
                  name="currentRole"
                  type="text"
                  required
                  placeholder="e.g. VP Business Development"
                  style={inputStyle}
                />
              </Field>

              <Field label="Company">
                <input
                  name="company"
                  type="text"
                  required
                  placeholder="Current or most recent company"
                  style={inputStyle}
                />
              </Field>

              <Field label="LinkedIn profile URL">
                <input
                  name="linkedin"
                  type="text"
                  required
                  placeholder="linkedin.com/in/yourprofile"
                  style={inputStyle}
                />
              </Field>

              <Field label="Location">
                <input
                  name="location"
                  type="text"
                  required
                  placeholder="City, State"
                  style={inputStyle}
                />
              </Field>

              <Field label="Phone">
                <input
                  name="phone"
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  style={inputStyle}
                />
              </Field>

              <Field label="Resume / CV upload">
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,application/pdf"
                  required
                  onChange={(e) =>
                    setFileName(e.currentTarget.files?.[0]?.name ?? null)
                  }
                  style={{ ...inputStyle, padding: "10px 14px" }}
                />
                {fileName ? (
                  <span
                    style={{
                      display: "block",
                      marginTop: 8,
                      fontSize: 13,
                      color: TEAL,
                    }}
                  >
                    {fileName}
                  </span>
                ) : null}
              </Field>

              {/* Questions */}
              <h2 style={{ ...sectionTitleStyle, marginTop: 16 }}>Questions</h2>

              <Field
                label="Briefly describe your relevant background."
                hint="Biotech, pharma, CRO/CDMO, life sciences services, or related commercial roles. 3–6 sentences."
              >
                <textarea name="q5" required style={textareaStyle} />
              </Field>

              <Field
                label="What existing relationships do you have with people who buy or influence outsourced research services?"
                hint="For example: founders, CSOs, R&D leads, or procurement contacts at biotech startups, pharma groups, or venture-backed companies. If you don't have direct relationships, be honest — we are also open to candidates who know the space but are building their network."
              >
                <textarea name="q6" required style={textareaStyle} />
              </Field>

              <Field
                label="Give us one example of a client relationship you helped win, grow, or manage in a technical or scientific market."
                hint="High-level is fine. We're looking for how you think about BD, not confidential details."
              >
                <textarea name="q7" required style={textareaStyle} />
              </Field>

              <Field label="This role is equity-based with no salary to start. What makes that structure realistic or attractive for you at this point in your career?">
                <textarea name="q8" required style={textareaStyle} />
              </Field>

              <Field
                label="If you joined Kevda tomorrow, what would your first 90 days look like in terms of identifying and engaging potential clients?"
                hint="5–10 bullets or a short paragraph."
              >
                <textarea name="q9" required style={textareaStyle} />
              </Field>

              <Field
                label="Anything else that would help us understand why you might be the right business-side co-founder for Kevda?"
                hint="Optional."
              >
                <textarea name="q10" style={textareaStyle} />
              </Field>

              {error ? (
                <p
                  style={{
                    color: ERROR,
                    fontSize: 14,
                    margin: "0 0 16px",
                    padding: "12px 14px",
                    background: "#fdecea",
                    border: `1px solid ${ERROR}33`,
                    borderRadius: 8,
                  }}
                >
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: FONT,
                  color: "#fff",
                  background: TEAL,
                  border: "none",
                  borderRadius: 10,
                  cursor: submitting ? "default" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>

              <p
                style={{
                  fontSize: 13,
                  color: TEXT_2,
                  textAlign: "center",
                  margin: "16px 0 0",
                  lineHeight: 1.5,
                }}
              >
                We review every application personally. No automated rejections
                without a human read.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        padding: "64px 36px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: TEAL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 28px",
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 style={{ fontSize: 30, fontWeight: 500, color: TEAL, margin: "0 0 16px" }}>
        Application Received
      </h1>
      <p
        style={{
          fontSize: 16,
          color: TEXT_2,
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        Thank you for applying to Kevda Bioworks. We review every application
        personally. If your background is a strong fit, you&apos;ll hear from us
        within a few business days.
      </p>
    </div>
  );
}
