import type { Metadata } from "next";
import ResourcesContent from "@/components/pages/ResourcesContent";

export const metadata: Metadata = {
  title: "Case Studies - ZPT",
  description:
    "See how ZPT operates across logistics, automotive leasing, and financial analytics. Real results from real companies.",
  alternates: {
    canonical: "https://zpteam.ai/resources",
  },
  openGraph: {
    title: "Case Studies - ZPT",
    description:
      "See how ZPT operates across logistics, automotive leasing, and financial analytics.",
    url: "https://zpteam.ai/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
