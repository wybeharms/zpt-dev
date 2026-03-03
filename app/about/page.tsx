import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About ZPT -- AI Sales Agents",
  description:
    "ZPT believes the most effective way to use AI agents is by running them on top of a local, structured folder system. Operational across three industries.",
  alternates: {
    canonical: "https://zpteam.ai/about",
  },
  openGraph: {
    title: "About ZPT -- AI Sales Agents",
    description:
      "AI agents running on structured local folders. Operational across three industries.",
    url: "https://zpteam.ai/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
