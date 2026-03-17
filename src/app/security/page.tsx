import FrameSecurity from "@/imports/FrameSecurity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "Intellectual property protection and data security workflows for confidential biotech research.",
};

export default function SecurityPage() {
  return <FrameSecurity />;
}
