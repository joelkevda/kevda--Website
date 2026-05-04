"use client";
import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { FourPillars } from "@/components/sections/FourPillars";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { KevdaAdvantage } from "@/components/sections/KevdaAdvantage";
import { Leadership } from "@/components/sections/Leadership";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SideNavItem } from "@/components/sections/SideNav";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

const sideNavItems: SideNavItem[] = [
  { label: "Intro", sectionId: "section-hero" },
  { label: "Capabilities", sectionId: "section-pillars" },
  { label: "Technology", sectionId: "section-four-pillars" },
  { label: "Services", sectionId: "section-how-we-work" },
  { label: "Contact", sectionId: "section-contact" },
];

export default function Page1() {
  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <div id="section-hero"><Hero /></div>
      <Marquee />
      <ScrollReveal delay={0}>
        <div id="section-pillars"><Pillars /></div>
      </ScrollReveal>
      <div id="section-four-pillars"><FourPillars /></div>
      <ScrollReveal delay={0}>
        <div id="section-how-we-work"><HowWeWork /></div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="section-advantage"><KevdaAdvantage /></div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="section-leadership"><Leadership /></div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div id="section-contact"><UnifiedCTA /></div>
      </ScrollReveal>
    </PageWrapper>
  );
}
