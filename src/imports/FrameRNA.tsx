"use client";
import React from "react";
import { CapabilityTemplate } from "@/components/sections/CapabilityTemplate";

export default function FrameRNA() {
  const sideNavItems = [
    { label: "Intro", sectionId: "rna-hero" },
    { label: "Capabilities", sectionId: "rna-caps" },
    { label: "Workflow", sectionId: "rna-workflow" },
    { label: "Outputs", sectionId: "rna-outputs" },
    { label: "Contact", sectionId: "rna-contact" },
  ];

  const capabilities = [
    { text: "IVT mRNA synthesis (1–100 mg)" },
    { text: "Microfluidic LNP formulation" },
    { text: "RNA Integrity profiling (Fragment Analyzer)" },
    { text: "Particle sizing and characterization (DLS/Zetasizer)" },
  ];

  const workflowSteps = [
    { title: "IVT", icon: "/imgs/specialized rna/ivt.png" },
    { title: "LNP", icon: "/imgs/specialized rna/lnp.png" },
    { title: "Integrity", icon: "/imgs/specialized rna/Integrity.png" },
    { title: "Sizing", icon: "/imgs/specialized rna/sizing.png" },
    { title: "Data Package", icon: "/imgs/specialized rna/data.png" },
  ];

  const outputPoints = [
    "Batch summaries and QC readouts (where applicable to scope)",
    "Structured analytical outputs with annotated traces",
    "Documentation formatted for diligence and investor review",
  ];

  const outputCards = [
    { title: "Integrity Trace" as const, color: "#FDF8EE" as const, type: "trace" as const, tag: "FIG" as const, highlight: true as const },
    { title: "DLS Curve" as const, color: "#ffffff" as const, type: "chart" as const, tag: "FIG" as const },
  ];

  return (
    <CapabilityTemplate
      title="Specialized RNA & Advanced Delivery"
      subtitle="Synthetic RNA and delivery execution for preclinical cycles — disciplined workflows, advanced analytics, and documentation built for review and diligence."
      heroImage="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png"
      splineScene="/spline/specialized.splinecode"
      capabilities={capabilities}
      workflowSteps={workflowSteps}
      outputPoints={outputPoints}
      outputCards={outputCards}
      sideNavItems={sideNavItems}
    />
  );
}
