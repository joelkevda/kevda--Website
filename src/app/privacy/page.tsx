import FramePrivacy from "@/imports/FramePrivacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: "Kevda Bio Privacy Policy and data handling practices.",
};

export default function PrivacyPage() {
  return <FramePrivacy />;
}
