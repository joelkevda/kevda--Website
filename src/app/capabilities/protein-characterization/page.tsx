import FrameProtein from "@/imports/FrameProtein";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protein Characterization",
  description: "Quantitative assays, ELISA, Western Blotting, and IF imaging for biological confirmation.",
};

export default function ProteinCharacterizationPage() {
  return <FrameProtein />;
}
