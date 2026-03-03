import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { I18nProvider } from "@/components/I18nProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
    "ZPT automates prospect sourcing, data enrichment, and personalized outreach using AI agents connected to your existing sales stack. The output of a full sales team, without hiring one.",
  metadataBase: new URL("https://zpteam.ai"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zpteam.ai",
    siteName: "ZPT",
    title: "ZPT -- AI Sales Agents for B2B Companies",
    description:
      "ZPT automates prospect sourcing, data enrichment, and personalized outreach using AI agents connected to your existing sales stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZPT -- AI Sales Agents for B2B Companies",
    description:
      "ZPT automates prospect sourcing, data enrichment, and personalized outreach using AI agents connected to your existing sales stack.",
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
        className={`${cormorant.variable} ${jakarta.variable} ${sourceCode.variable} antialiased`}
      >
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
