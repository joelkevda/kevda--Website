"use client";
import React from "react";
import { CapabilityTemplate } from "@/components/sections/CapabilityTemplate";

export default function Frame15() {
  const sideNavItems = [
    { label: "Intro", sectionId: "mol-hero" },
    { label: "Capabilities", sectionId: "mol-caps" },
    { label: "Technology", sectionId: "mol-tech" },
    { label: "Services", sectionId: "mol-services" },
    { label: "Contact", sectionId: "mol-contact" },
  ];

  const capabilities = [
    { text: "Precision cloning (Gibson, Golden Gate, traditional assembly)" },
    { text: "Scalable plasmid workflows and microbial expansion" },
    { text: "Sequence verification and restriction mapping" },
    { text: "qPCR-based primer validation" },
  ];

  const workflowSteps = [
    { title: "Design", icon: "/imgs/molecular biology/icons/design.png" },
    { title: "Assembly", icon: "/imgs/molecular biology/icons/assembly.png" },
    { title: "Expansion", icon: "/imgs/molecular biology/icons/Expansion.png" },
    { title: "Validation", icon: "/imgs/molecular biology/icons/validation.png" },
    { title: "Handoff", icon: "/imgs/molecular biology/icons/handoff.png" },
  ];

  const outputPoints = [
    "Verified constructs with sequence confirmation and supporting documentation",
    "QC checkpoints logged and aligned to agreed scope",
    "Clean handoff reporting designed for internal review or downstream use",
  ];

  const outputCards = [
    { title: "Construct Summary" as const, color: "#ffffff" as const, type: "lines" as const, tag: "PDF" as const },
    { title: "Validation Table" as const, color: "#FDF8EE" as const, type: "table" as const, tag: "XLS" as const, highlight: true as const },
    { title: "Handoff Notes" as const, color: "#ffffff" as const, type: "lines" as const, tag: "DOC" as const },
  ];

  return (
    <CapabilityTemplate
      title="Molecular Biology & Vector Engineering"
      subtitle="Foundational build work for discovery and genetic medicine — executed with tight controls, verified validation, and downstream-ready documentation."
      heroImage="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png"
      splineScene="/spline/molecular.splinecode"
      capabilities={capabilities}
      workflowSteps={workflowSteps}
      outputPoints={outputPoints}
      outputCards={outputCards}
      sideNavItems={sideNavItems}
      secondaryButtonText="Discuss a Molecular Biology Scope"
    />
  );
}
