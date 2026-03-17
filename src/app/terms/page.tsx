import FrameTerms from "@/imports/FrameTerms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using Kevda Bioworks services.",
};

export default function TermsPage() {
  return <FrameTerms />;
}
