import FrameCareers from "@/imports/FrameCareers";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers",
  description: "Join Kevda Bio and help build the future of integrated mRNA development.",
};

export default function CareersPage() {
  return <FrameCareers />;
}
