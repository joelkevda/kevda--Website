import FrameLeadership from "@/imports/FrameLeadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the scientific and operational leaders behind Kevda Bioworks.",
};

export default function LeadershipPage() {
  return <FrameLeadership />;
}
