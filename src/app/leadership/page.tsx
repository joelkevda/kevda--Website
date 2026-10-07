import FrameLeadership from "@/imports/FrameLeadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/leadership" },
  title: "Leadership",
  description: "Meet the scientific and operational leaders behind Kevda Bio.",
  openGraph: {
    title: "Leadership | Kevda Bio",
    description: "Scientific standards and operational discipline — owned at the top.",
  },
};

export default function LeadershipPage() {
  return <FrameLeadership />;
}
