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
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={fieldGap}>
      <label style={labelStyle}>
        {label}
        {required ? (
          <span style={{ color: "#C62828", marginLeft: "3px" }}>*</span>
        ) : null}
      </label>
      {hint ? <span style={hintStyle}>{hint}</span> : null}
      {children}
    </div>
  );
}

export default function BdAssociatePage() {
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
      const res = await fetch("/api/apply-bd", {
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
            Business Development Associate
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
            Get real biotech BD experience.
          </h1>
          <p style={{ fontSize: 15, color: TEXT_2, margin: 0, lineHeight: 1.6 }}>
            Kevda Bio · Boston, MA | Bangalore, India · Commission-only · Remote
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
                Most postdocs and PhD candidates who want to move into industry
                hit the same wall: business development roles want BD
                experience, and you can&apos;t get it from the bench. This role
                is a way in. You&apos;ll find and open doors to labs and
                companies that need mRNA, LNP or assay work, hand the warm
                introduction to our scientific lead, and earn 20% of invoiced
                revenue on every project you source. No quota, no fixed hours,
                no ceiling.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: TEXT }}>
                Five questions below. We only need enough to decide whether a
                20-minute call makes sense. We reply to every application.
              </p>
            </div>

            <p style={{ fontSize: "12px", color: "#999", margin: "0" }}>* Required</p>

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

              <Field label="Full name" required>
                <input name="name" type="text" required style={inputStyle} />
              </Field>

              <Field label="Email address" required>
                <input name="email" type="email" required style={inputStyle} />
              </Field>

              <Field label="LinkedIn profile URL" required>
                <input
                  name="linkedin"
                  type="text"
                  required
                  placeholder="linkedin.com/in/yourprofile"
                  style={inputStyle}
                />
              </Field>

              <Field label="Current position and institution" required>
                <input
                  name="position"
                  type="text"
                  required
                  placeholder="Postdoc, Department of Biology, [University]"
                  style={inputStyle}
                />
              </Field>

              <Field label="Field of research" required>
                <input
                  name="field"
                  type="text"
                  required
                  placeholder="RNA biology, drug delivery, vaccinology…"
                  style={inputStyle}
                />
              </Field>

              <Field label="Location (city)" required>
                <input
                  name="location"
                  type="text"
                  required
                  placeholder="City"
                  style={inputStyle}
                />
              </Field>

              <Field label="Resume / CV">
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,application/pdf"
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
                label="Name three labs, startups or companies you would approach first, and why you think each one needs mRNA, LNP or assay work done outside their own lab."
                required
              >
                <textarea name="q1" required style={textareaStyle} />
              </Field>

              <Field
                label="Describe a time you got someone outside your own lab to do something — a collaboration, a shared resource, a vendor change, a committee decision. What did you do and what happened?"
                required
              >
                <textarea name="q2" required style={textareaStyle} />
              </Field>

              <Field
                label="How many hours a week can you realistically give this, and what would your first 30 days look like?"
                required
              >
                <textarea name="q3" required style={textareaStyle} />
              </Field>

              <Field
                label="Are you permitted to earn outside income under your institution's conflict-of-interest policy and your visa status? Answer yes, no or not sure, and add one line of detail."
                required
              >
                <textarea name="q4" required style={textareaStyle} />
              </Field>

              <Field
                label="Why do you want BD experience, and what would make this worth it for you six months from now?"
                required
              >
                <textarea name="q5" required style={textareaStyle} />
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
        Thank you for applying. We read every application and reply to every
        one. If it looks like a fit, we&apos;ll send you a link to book a
        20-minute call.
      </p>
    </div>
  );
}
