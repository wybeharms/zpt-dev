import type { Metadata } from "next";
import SalesContent from "@/components/pages/SalesContent";

export const metadata: Metadata = {
  title: "ZPT Sales - AI-Powered Sales Operations",
  description:
    "AI agents that chain multiple steps together autonomously. Source, research, qualify, draft, follow up. Connect existing tools, no migration needed.",
  alternates: {
    canonical: "https://zpteam.ai/sales",
  },
  openGraph: {
    title: "ZPT Sales - AI-Powered Sales Operations",
    description:
      "AI agents that chain multiple steps together autonomously. Source, research, qualify, draft, follow up.",
    url: "https://zpteam.ai/sales",
  },
};

export default function SalesPage() {
  return <SalesContent />;
}
