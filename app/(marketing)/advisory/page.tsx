import type { Metadata } from "next";
import AdvisoryContent from "@/components/pages/AdvisoryContent";

export const metadata: Metadata = {
  title: "ZPT Advisory -- Build Your Own AI-Powered Workflows",
  description:
    "ZPT's core product is a structured local folder that connects to AI coding agents. Not limited to sales: marketing, content, operations, and more.",
  alternates: {
    canonical: "https://zpteam.ai/advisory",
  },
  openGraph: {
    title: "ZPT Advisory -- Build Your Own AI-Powered Workflows",
    description:
      "ZPT's core product is a structured local folder that connects to AI coding agents. Not limited to sales: marketing, content, operations, and more.",
    url: "https://zpteam.ai/advisory",
  },
};

export default function AdvisoryPage() {
  return <AdvisoryContent />;
}
