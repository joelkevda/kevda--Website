import FrameContact from "@/imports/FrameContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Start a confidential scope discussion with Kevda Bio.",
  openGraph: {
    title: "Contact | Kevda Bio",
    description: "Start a confidential scope discussion with Kevda Bio.",
  },
};

export default function ContactPage() {
  return <FrameContact />;
}
