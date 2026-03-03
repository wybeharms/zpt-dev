import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZPT -- AI Sales Agents for B2B Companies",
    template: "%s | ZPT",
  },
  description:
    "ZPT handles sourcing, enrichment, and outreach using AI agents that connect to the tools your company already uses. The output of a full sales team, without hiring one.",
  metadataBase: new URL("https://zpteam.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zpteam.ai",
    siteName: "ZPT",
    title: "ZPT -- AI Sales Agents for B2B Companies",
    description:
      "ZPT handles sourcing, enrichment, and outreach using AI agents that connect to the tools your company already uses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZPT -- AI Sales Agents for B2B Companies",
    description:
      "ZPT handles sourcing, enrichment, and outreach using AI agents that connect to the tools your company already uses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zpteam.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${sourceCode.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
