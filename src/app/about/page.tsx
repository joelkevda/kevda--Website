import FrameAbout from "@/imports/FrameAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kevda's mission, scientific leadership, and operational footprint in Boston and Bangalore.",
};

export default function AboutPage() {
  return <FrameAbout />;
}
