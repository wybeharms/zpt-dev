import type { Metadata } from "next";
import TechnologyContent from "@/components/pages/TechnologyContent";

export const metadata: Metadata = {
  title: "Technology - How ZPT Works",
  description:
    "How AI agents work, what ZPT builds on, and how it connects to your existing tools.",
  alternates: {
    canonical: "https://zpteam.ai/technology",
  },
  openGraph: {
    title: "Technology - How ZPT Works",
    description:
      "How AI agents work, what ZPT builds on, and how it connects to your existing tools.",
    url: "https://zpteam.ai/technology",
  },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
