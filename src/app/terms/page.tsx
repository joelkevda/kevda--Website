import FrameTerms from "@/imports/FrameTerms";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Use",
  description: "Terms and conditions for using Kevda Bio services.",
};

export default function TermsPage() {
  return <FrameTerms />;
}
