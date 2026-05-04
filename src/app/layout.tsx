import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/index.css";

const GA_MEASUREMENT_ID = "G-YSQX6CVLTW";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
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
import { SiteLoader } from "@/components/layout/SiteLoader";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} antialiased font-space-grotesk`} suppressHydrationWarning>
        <SiteLoader />
        <ScrollProgress />
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
