import Page1 from "@/imports/Page1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kevda Bioworks | Integrated mRNA Development",
  description: "End-to-end wet-lab execution for biotech and biopharma — combining scientific leadership with operational rigor.",
};

export default function Home() {
  return <Page1 />;
}
