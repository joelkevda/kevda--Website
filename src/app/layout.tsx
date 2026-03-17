import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/index.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevda Bioworks | Integrated mRNA Development",
    template: "%s | Kevda Bioworks",
  },
  description: "End-to-end wet-lab execution for biotech and biopharma — combining scientific leadership with operational rigor in Molecular Biology, Cell Engineering, and RNA platforms.",
  keywords: ["mRNA", "Biotech", "Molecular Biology", "Cell Engineering", "Vector Engineering", "RNA Delivery", "Preclinical Execution"],
  authors: [{ name: "Kevda Bioworks" }],
  openGraph: {
    title: "Kevda Bioworks | Integrated mRNA Development",
    description: "End-to-end wet-lab execution for biotech and biopharma.",
    url: "https://kevdabioworks.com",
    siteName: "Kevda Bioworks",
    locale: "en_US",
    type: "website",
  },
};

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased font-space-grotesk`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
