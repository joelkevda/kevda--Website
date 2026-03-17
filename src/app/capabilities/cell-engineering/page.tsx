import FrameCell from "@/imports/FrameCell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cell Engineering",
  description: "Functional workflows, transfection, knockdown, and IC50 dose-response profiling.",
};

export default function CellEngineeringPage() {
  return <FrameCell />;
}
