import FrameContact from "@/imports/FrameContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a confidential scope discussion with Kevda Bioworks.",
  openGraph: {
    title: "Contact | Kevda Bioworks",
    description: "Start a confidential scope discussion with Kevda Bioworks.",
  },
};

export default function ContactPage() {
  return <FrameContact />;
}
