"use client";
import React from "react";
import { CapabilityTemplate } from "@/components/sections/CapabilityTemplate";

export default function FrameCell() {
  const sideNavItems = [
    { label: "Intro", sectionId: "cell-hero" },
    { label: "Capabilities", sectionId: "cell-caps" },
    { label: "Workflow", sectionId: "cell-workflow" },
    { label: "Outputs", sectionId: "cell-outputs" },
    { label: "Contact", sectionId: "cell-contact" },
  ];

  const capabilities = [
    { text: "Transfection and knockdown (mRNA/DNA/ASO delivery)" },
    { text: "Knockdown verification and efficacy profiling" },
    { text: "IC50 dose-response (sigmoidal modeling)" },
    { text: "Reporter assays and subcellular fractionation" },
  ];

  const workflowSteps = [
    { title: "Input", icon: "/imgs/cell engineering/input.png" },
    { title: "Controls", icon: "/imgs/cell engineering/controls.png" },
    { title: "Readouts", icon: "/imgs/cell engineering/readouts.png" },
    { title: "IC50 Curve", icon: "/imgs/cell engineering/ic50.png" },
    { title: "Decision Note", icon: "/imgs/cell engineering/decision.png" },
  ];

  const outputPoints = [
    "Packaged datasets and publication-ready plots",
    "Controls and experimental design summary",
    "Reporting structured for internal review and decision-making",
  ];

  const outputCards = [
    { title: "Dataset Table" as const, color: "#ffffff" as const, type: "table" as const, tag: "XLS" as const },
    { title: "IC50 Curve" as const, color: "#FDF8EE" as const, type: "chart" as const, tag: "FIG" as const, highlight: true as const },
    { title: "Controls Summary" as const, color: "#ffffff" as const, type: "lines" as const, tag: "PDF" as const },
  ];

  return (
    <CapabilityTemplate
      title="Cell Engineering & Functional Analysis"
      subtitle="Functional workflows to confirm activity and support decisions — delivered with disciplined execution and interpretation-ready reporting."
      heroImage="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png"
      splineScene="/spline/cell.splinecode"
      capabilities={capabilities}
      workflowSteps={workflowSteps}
      outputPoints={outputPoints}
      outputCards={outputCards}
      sideNavItems={sideNavItems}
      secondaryButtonText="Talk to a Scientist"
    />
  );
}
