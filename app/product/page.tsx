import type { Metadata } from "next";
import EnrichmentTabs from "@/components/EnrichmentTabs";

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

const steps = [
  {
    number: "01",
    title: "Connect existing tools",
    description:
      "HubSpot, Apollo, LinkedIn, Google Maps, email. No migration. No new software.",
  },
  {
    number: "02",
    title: "ZPT sources and enriches prospects",
    description:
      "Multi-channel sourcing: LinkedIn, directories, maps, conferences, competitor intel, job postings.",
  },
  {
    number: "03",
    title: "Personalized outreach, ready for approval",
    description:
      "Every draft uses the company's voice, positioning, and specific prospect research. Nothing generic.",
  },
  {
    number: "04",
    title: "Pipeline managed end-to-end",
    description:
      "Full activity logging, follow-up tracking, CRM sync, weekly reporting.",
  },
];

const capabilities = [
  {
    name: "Sourcing",
    description: "Find prospects across LinkedIn, directories, maps, and more.",
  },
  {
    name: "Enrichment",
    description:
      "Build full prospect profiles with company intel and decision-maker data.",
  },
  {
    name: "Outreach",
    description:
      "Draft personalized emails using the company's voice and prospect research.",
  },
  {
    name: "Pipeline",
    description:
      "Track every prospect from first touch to closed deal.",
  },
  {
    name: "CRM Sync",
    description: "Push data to HubSpot or other CRM tools automatically.",
  },
  {
    name: "Content",
    description:
      "Create sales collateral, follow-up sequences, and engagement content.",
  },
  {
    name: "Meetings",
    description: "Pre-call research, transcript processing, follow-up drafts.",
  },
  {
    name: "Reporting",
    description:
      "Weekly performance reports with metrics, wins, and recommendations.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "~$300",
    period: "/mo",
    features: ["Sourcing", "Enrichment"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "~$600",
    period: "/mo",
    features: [
      "Everything in Starter, plus:",
      "Outreach drafting",
      "Pipeline management",
    ],
    highlight: true,
  },
  {
    name: "Full Service",
    price: "~$1,000",
    period: "/mo",
    features: [
      "Everything in Growth, plus:",
      "CRM sync",
      "Content creation",
      "Meeting support",
    ],
    highlight: false,
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            How ZPT Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            AI agents that chain multiple steps together autonomously. Source,
            research, qualify, draft, follow up. Just like a human sales rep
            would.
          </p>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Step by step
          </h2>
          <div className="mt-14 space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-heading text-3xl font-light text-gold">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Capabilities
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.name}
                className="rounded-lg border border-border-warm bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg font-medium text-navy">
                  {cap.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment templates */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Enrichment templates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-muted">
            The company provides unstructured content and guidelines. ZPT turns
            that into structured, actionable intelligence.
          </p>
          <EnrichmentTabs />
          <p className="mt-6 text-center text-sm text-text-muted">
            ICP scoring uses the company&apos;s own criteria and context. The
            more detailed the input, the better the analysis.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-center text-white/60">
            A fraction of what a single SDR costs.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-8 ${
                  tier.highlight
                    ? "border-2 border-gold bg-navy-light"
                    : "border border-white/10 bg-navy-light"
                }`}
              >
                <h3 className="font-heading text-2xl font-medium">
                  {tier.name}
                </h3>
                <p className="mt-2">
                  <span className="text-3xl font-light text-gold">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/50">{tier.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm leading-relaxed text-white/70"
                    >
                      {feature.endsWith(":") ? (
                        <span className="text-white/50">{feature}</span>
                      ) : (
                        <>
                          <span className="mr-2 text-gold">+</span>
                          {feature}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:request@zpteam.ai?subject=Intro call request"
                  className={`mt-8 block rounded py-2.5 text-center text-sm font-medium transition-colors ${
                    tier.highlight
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
