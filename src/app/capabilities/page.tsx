import Page2 from "@/imports/Page2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "End-to-end wet-lab execution across Molecular Biology, Cell Engineering, Protein Characterization, and RNA platforms.",
  openGraph: {
    title: "Capabilities | Kevda Bioworks",
    description: "End-to-end wet-lab execution across Molecular Biology, Cell Engineering, Protein Characterization, and RNA & Delivery platforms.",
  },
};

export default function CapabilitiesPage() {
  return <Page2 />;
}
