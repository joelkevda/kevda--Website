import FrameCareers from "@/imports/FrameCareers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Kevda Bioworks and help build the future of integrated mRNA development.",
};

export default function CareersPage() {
  return <FrameCareers />;
}
