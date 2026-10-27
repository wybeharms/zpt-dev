import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zptpartners.com"),
  title: "ZPT Partners | Put Agents To Work",
  description:
    "Put agents to work with Claude, ChatGPT or Copilot. ZPT helps teams set up context, instructions and workflows for everyday tasks. You own the setup.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ZPT Partners | Put Agents To Work",
    description:
      "Put agents to work with Claude, ChatGPT or Copilot. ZPT helps teams set up context, instructions and workflows for everyday tasks. You own the setup.",
    url: "https://www.zptpartners.com",
    siteName: "ZPT Partners",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZPT Partners | Put Agents To Work",
    description: "Put agents to work with Claude, ChatGPT or Copilot. ZPT helps teams set up context, instructions and workflows for everyday tasks. You own the setup.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="bg-navy text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
