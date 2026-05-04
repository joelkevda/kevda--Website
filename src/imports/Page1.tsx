"use client";
import React from "react";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SideNavItem } from "@/components/sections/SideNav";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import ShaderBackground from "@/components/ShaderBackground";

const sideNavItems: SideNavItem[] = [
  { label: "Intro", sectionId: "section-hero" },
  { label: "Capabilities", sectionId: "section-capabilities" },
  { label: "Process", sectionId: "section-how-we-work" },
  { label: "Advantage", sectionId: "section-advantage" },
  { label: "Contact", sectionId: "section-contact" },
];

type Stat = { label: string; num?: string; count?: number };
const stats: Stat[] = [
  { count: 4, label: "Core Capability Pillars" },
  { num: "PhD", label: "Scientific Leadership" },
  { num: "Net 30", label: "Payment Terms" },
  { count: 2, label: "Global Locations" },
];

const capabilities = [
  {
    num: "01",
    title: "Molecular Biology & Vector Engineering",
    desc: "Precision cloning and validated constructs built for downstream success. Gibson, Golden Gate, and traditional assembly with sequence verification.",
    href: "/capabilities/molecular-biology",
  },
  {
    num: "02",
    title: "Cell Engineering & Functional Analysis",
    desc: "Structured transfection, knockdown, and IC50 workflows designed for decisions. Packaged datasets and reporting structured for interpretation.",
    href: "/capabilities/cell-engineering",
  },
  {
    num: "03",
    title: "Protein Characterization & Immunoassays",
    desc: "Quantitative and visual confirmation of target biology. ELISA, Western blotting, and immunofluorescence imaging with structured summary reporting.",
    href: "/capabilities/protein-characterization",
  },
  {
    num: "04",
    title: "Specialized RNA & Advanced Delivery",
    desc: "IVT mRNA (1–100 mg), microfluidic LNP formulation, RNA integrity profiling, and particle characterization. Documentation built for diligence.",
    href: "/capabilities/rna-delivery",
  },
];

const howSteps = [
  {
    roman: "I",
    step: "Align",
    title: "Define scope, controls, and timeline.",
    desc: "Every engagement begins with explicit scope definition — deliverables, controls, timeline, and acceptance criteria agreed before any work begins.",
  },
  {
    roman: "II",
    step: "Execute",
    title: "Controlled workflows with checkpoints.",
    desc: "Repeatable protocols. Explicit controls. Structured checkpoints that allow course correction without compromising the timeline.",
  },
  {
    roman: "III",
    step: "Deliver",
    title: "Clean, review-ready data packages.",
    desc: "Outputs structured for internal review, investor diligence, and downstream decision-making — not raw data dumps.",
  },
];

const advantages = [
  {
    n: "01",
    title: "Scientific Standards",
    desc: "Built from environments where the science has to hold. Leadership shaped by leading research institutions and platform biotech environments.",
  },
  {
    n: "02",
    title: "Strategic Efficiency",
    desc: "Extend runway. Protect data integrity. Boston leadership and Bangalore execution deliver PhD-led science at a fraction of domestic CRO cost.",
  },
  {
    n: "03",
    title: "QC-Forward Reporting",
    desc: "Every output structured for internal and investor scrutiny. CoA-style documentation applied where applicable.",
  },
  {
    n: "04",
    title: "End-to-End Logistics",
    desc: "Procurement to reporting. One point of contact from scope alignment to data handoff.",
  },
];

const ArrowIcon = ({ size = 12, weight = 1.4 }: { size?: number; weight?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M1 6h10M6.5 1.5L11 6l-4.5 4.5" stroke="currentColor" strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Page1() {
  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <div id="section-hero"><Hero /></div>
      <Marquee />

      {/* ── STATS STRIP ── */}
      <section className="kv-stats">
        <div className="kv-stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="kv-stat-item">
              <div className="kv-stat-num">
                {typeof stat.count === "number" ? <CountUp to={stat.count} /> : stat.num}
              </div>
              <div className="kv-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="section-capabilities" className="kv-cap-section">
        <ScrollReveal delay={0}>
          <div className="kv-cap-head">
            <div className="kv-eyebrow">
              <div className="kv-eyebrow-bar" />
              <span className="kv-eyebrow-text">Capabilities</span>
            </div>
            <h2 className="kv-h2">Four pillars.<br /><em>One execution system.</em></h2>
            <p className="kv-cap-sub">End-to-end wet-lab execution so your team can focus on the science that requires your attention.</p>
          </div>
        </ScrollReveal>
        <div className="kv-cap-rows">
          {capabilities.map(({ num, title, desc, href }, i) => (
            <ScrollReveal key={num} delay={i * 80}>
              <div className="kv-cap-row">
                <div className="kv-cap-num">{num}</div>
                <div className="kv-cap-title">{title}</div>
                <div className="kv-cap-desc">{desc}</div>
                <div className="kv-cap-cta">
                  <Link href={href} className="kv-cap-link">
                    Explore
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="kv-divider" />

      {/* ── HOW WE WORK ── */}
      <section id="section-how-we-work" className="kv-how">
        <div className="kv-container">
          <ScrollReveal delay={0}>
            <div className="kv-eyebrow">
              <div className="kv-eyebrow-bar" />
              <span className="kv-eyebrow-text">Process</span>
            </div>
            <h2 className="kv-h2">How we<br /><em>work.</em></h2>
          </ScrollReveal>
          <div className="kv-how-grid">
            {howSteps.map(({ roman, step, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 100}>
                <div className="kv-how-card" data-roman={roman}>
                  <div className="kv-how-step-label">{step}</div>
                  <div className="kv-how-title">{title}</div>
                  <div className="kv-how-desc">{desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEVDA ADVANTAGE ── */}
      <section id="section-advantage" className="kv-adv">
        <ShaderBackground />
        <div className="kv-container">
          <ScrollReveal delay={0}>
            <div className="kv-eyebrow">
              <div className="kv-eyebrow-bar" />
              <span className="kv-eyebrow-text" style={{ color: "rgba(212,181,124,0.7)" }}>The Kevda Advantage</span>
            </div>
            <h2 className="kv-h2 kv-h2-light">Why teams<br /><em>choose Kevda.</em></h2>
          </ScrollReveal>
          <div className="kv-adv-grid">
            {advantages.map(({ n, title, desc }, i) => (
              <ScrollReveal key={n} delay={i * 80}>
                <div className="kv-adv-card">
                  <div className="kv-adv-num">{n}</div>
                  <div className="kv-adv-title">{title}</div>
                  <div className="kv-adv-desc">{desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="kv-lead">
        <div className="kv-container">
          <ScrollReveal delay={0}>
            <div className="kv-eyebrow">
              <div className="kv-eyebrow-bar" />
              <span className="kv-eyebrow-text">Leadership</span>
            </div>
            <h2 className="kv-h2">Scientific standards and<br />operational discipline —<br /><em>owned at the top.</em></h2>
          </ScrollReveal>
          <div className="kv-lead-grid">
            <ScrollReveal delay={0}>
              <div className="kv-lead-card">
                <div className="kv-lead-name">Aaron Larsen</div>
                <div className="kv-lead-role">Senior Scientific Advisor</div>
                <div className="kv-lead-bio">Aaron Larsen advises Kevda on scientific direction and execution standards. He brings deep experience from world&apos;s leading biotech companies and research universities — with focus on molecular biology, RNA platforms, delivery systems, and analytical workflows.</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="kv-lead-card">
                <div className="kv-lead-name">Joel Deutsch</div>
                <div className="kv-lead-role">Founder &amp; CEO</div>
                <div className="kv-lead-bio">Joel Deutsch leads Kevda Bioworks, drawing on nearly a decade of operations leadership at F5 Hiring Solutions. He oversees strategy, hiring, infrastructure, vendor management, and day-to-day execution — ensuring reliable timelines, structured communication, and disciplined delivery.</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="section-contact" className="kv-cta">
        <ScrollReveal delay={0}>
          <div className="kv-cta-inner">
            <div>
              <h2 className="kv-cta-h2">Start a confidential<br /><em>scope discussion.</em></h2>
              <p className="kv-cta-p">Tell us what you&apos;re building and what you need executed. We&apos;ll respond with scope questions and next steps.</p>
              <Link href="/contact" className="kv-btn-gold">
                Start a Confidential Discussion
                <ArrowIcon size={12} weight={1.5} />
              </Link>
              <div className="kv-cta-nda">NDA available upon request.</div>
            </div>
            <div className="kv-cta-locs">
              <div className="kv-cta-loc-head">Global Locations</div>
              <div className="kv-cta-city">Boston, MA</div>
              <div className="kv-cta-city-sub">Scientific leadership &amp; client relations</div>
              <div className="kv-cta-city">Bangalore, India</div>
              <div className="kv-cta-city-sub">PhD-led lab operations &amp; execution</div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
