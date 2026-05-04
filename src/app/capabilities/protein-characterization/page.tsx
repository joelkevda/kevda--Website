import FrameProtein from "@/imports/FrameProtein";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protein Characterization",
  description: "Quantitative assays, ELISA, Western Blotting, and IF imaging for biological confirmation.",
  openGraph: {
    title: "Protein Characterization & Immunoassays | Kevda Bioworks",
    description: "Quantitative and visual confirmation of target biology — ELISA, Western blotting, and immunofluorescence.",
  },
};

export default function ProteinCharacterizationPage() {
  return <FrameProtein />;
}
