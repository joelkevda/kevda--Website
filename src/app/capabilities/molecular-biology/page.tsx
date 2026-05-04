import Frame15 from "@/imports/Frame15";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molecular Biology",
  description: "Precision cloning, vector engineering, and validated build work for discovery and genetic medicine.",
  openGraph: {
    title: "Molecular Biology & Vector Engineering | Kevda Bioworks",
    description: "Precision cloning, plasmid workflows, and validated constructs built for downstream success.",
  },
};

export default function MolecularBiologyPage() {
  return <Frame15 />;
}
