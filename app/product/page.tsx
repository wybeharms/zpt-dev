import type { Metadata } from "next";
import ProductContent from "@/components/pages/ProductContent";

export const metadata: Metadata = {
  title: "How ZPT Works -- AI-Powered Sales Operations",
  description:
    "AI agents that chain multiple steps together autonomously. Source, research, qualify, draft, follow up. Connect existing tools, no migration needed.",
  alternates: {
    canonical: "https://zpteam.ai/product",
  },
  openGraph: {
    title: "How ZPT Works -- AI-Powered Sales Operations",
    description:
      "AI agents that chain multiple steps together autonomously. Source, research, qualify, draft, follow up.",
    url: "https://zpteam.ai/product",
  },
};

export default function ProductPage() {
  return <ProductContent />;
}
