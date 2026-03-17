import FrameRNA from "@/imports/FrameRNA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RNA & Delivery",
  description: "IVT mRNA synthesis, LNP formulation, and advanced analytical profiling for preclinical cycles.",
};

export default function RNADeliveryPage() {
  return <FrameRNA />;
}
