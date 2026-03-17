import FrameQuality from "@/imports/FrameQuality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality",
  description: "Scientific rigor and process control for preclinical execution — ensuring data integrity and reproducibility.",
};

export default function QualityPage() {
  return <FrameQuality />;
}
