import FramePrivacy from "@/imports/FramePrivacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kevda Bioworks Privacy Policy and data handling practices.",
};

export default function PrivacyPage() {
  return <FramePrivacy />;
}
