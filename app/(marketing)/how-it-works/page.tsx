import type { Metadata } from "next";
import HowItWorksContent from "@/components/pages/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works - ZPT",
  description:
    "How a ZPT engagement works: we visit your company, map workflows, build a custom AI directory, and train your team to use it independently.",
  alternates: {
    canonical: "https://zptpartners.com/how-it-works",
  },
  openGraph: {
    title: "How It Works - ZPT",
    description:
      "How a ZPT engagement works: we visit your company, map workflows, build a custom AI directory, and train your team.",
    url: "https://zptpartners.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
