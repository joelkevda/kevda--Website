import FrameCell from "@/imports/FrameCell";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/capabilities/cell-engineering" },
  title: "Cell Engineering",
  description: "Functional workflows, transfection, knockdown, and IC50 dose-response profiling.",
  openGraph: {
    title: "Cell Engineering & Functional Analysis | Kevda Bio",
    description: "Structured transfection, knockdown, and IC50 workflows designed for scientific decisions.",
  },
};

export default function CellEngineeringPage() {
  return <FrameCell />;
}
