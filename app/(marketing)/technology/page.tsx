import type { Metadata } from "next";
import TechnologyContent from "@/components/pages/TechnologyContent";

export const metadata: Metadata = {
  title: "Technology - How ZPT Works",
  description:
    "How AI agents work, what ZPT builds on, and how it connects to your existing tools.",
  alternates: {
    canonical: "https://zptpartners.com/technology",
  },
  openGraph: {
    title: "Technology - How ZPT Works",
    description:
      "How AI agents work, what ZPT builds on, and how it connects to your existing tools.",
    url: "https://zptpartners.com/technology",
  },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
