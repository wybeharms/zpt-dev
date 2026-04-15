import type { Metadata } from "next";
import CaseStudiesContent from "@/components/pages/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies - ZPT",
  description:
    "Real engagement results from ZPT advisory projects across industries.",
  alternates: {
    canonical: "https://zpteam.ai/case-studies",
  },
  openGraph: {
    title: "Case Studies - ZPT",
    description:
      "Real engagement results from ZPT advisory projects across industries.",
    url: "https://zpteam.ai/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
