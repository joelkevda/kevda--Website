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
      <div id="section-pillars"><Pillars /></div>
      <div id="section-four-pillars"><FourPillars /></div>
      <div id="section-how-we-work"><HowWeWork /></div>
      <div id="section-advantage"><KevdaAdvantage /></div>
      <div id="section-leadership"><Leadership /></div>
      <div id="section-contact"><UnifiedCTA /></div>
    </PageWrapper>
  );
}
