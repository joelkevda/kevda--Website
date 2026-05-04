import FrameLeadership from "@/imports/FrameLeadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the scientific and operational leaders behind Kevda Bioworks.",
  openGraph: {
    title: "Leadership | Kevda Bioworks",
    description: "Scientific standards and operational discipline — owned at the top.",
  },
};

export default function LeadershipPage() {
  return <FrameLeadership />;
}
