import type { Metadata } from "next";
import TrialContent from "@/components/pages/TrialContent";

export const metadata: Metadata = {
  title: "Start Free Trial | ZPT Sales",
  description:
    "Brief your AI sales team in under 2 minutes. Choose enrichment, prospecting, or competitor analysis and get results within 48 hours.",
  alternates: {
    canonical: "https://zpteam.ai/trial",
  },
  openGraph: {
    title: "Start Free Trial | ZPT Sales",
    description:
      "Brief your AI sales team in under 2 minutes. Get results within 48 hours.",
    url: "https://zpteam.ai/trial",
  },
};

export default function TrialPage() {
  return <TrialContent />;
}
