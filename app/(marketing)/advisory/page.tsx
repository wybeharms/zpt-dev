import type { Metadata } from "next";
import AdvisoryContent from "@/components/pages/AdvisoryContent";

export const metadata: Metadata = {
  title: "ZPT Advisory - AI Consulting for Your Team",
  description:
    "ZPT visits your company, understands workflows, educates your team on AI, sets up accounts, connects integrations, and optionally builds a tailored company folder. No vendor lock-in.",
  alternates: {
    canonical: "https://zpteam.ai/advisory",
  },
  openGraph: {
    title: "ZPT Advisory - AI Consulting for Your Team",
    description:
      "ZPT visits your company, understands workflows, educates your team on AI, sets up accounts, connects integrations, and optionally builds a tailored company folder. No vendor lock-in.",
    url: "https://zpteam.ai/advisory",
  },
};

export default function AdvisoryPage() {
  return <AdvisoryContent />;
}
