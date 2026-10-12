import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers/bd-associate" },
  title: "Business Development Associate",
  description:
    "Commission-only business development role for postdocs and PhD candidates who want real biotech BD experience. Earn 20% on every project you source.",
};

export default function BdAssociateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
