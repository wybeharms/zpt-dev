import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies -- ZPT",
  description:
    "See how ZPT operates across logistics, equipment leasing, and financial analytics. Real results from real companies.",
  alternates: {
    canonical: "https://zpteam.ai/resources",
  },
  openGraph: {
    title: "Case Studies -- ZPT",
    description:
      "See how ZPT operates across logistics, equipment leasing, and financial analytics.",
    url: "https://zpteam.ai/resources",
  },
};

const cases = [
  {
    title: "Logistics Company",
    description:
      "20,000 contacts enriched in a single day. Full prospect profiles with decision-maker identification, company intelligence, and outreach-ready data. Replaced a $50k/year SDR function.",
  },
  {
    title: "Equipment Leasing",
    description:
      "Pipeline building in the Dutch equipment leasing market. Structured prospect sourcing across directories, industry events, and LinkedIn. Ongoing enrichment and outreach support.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            Resources
          </h1>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Case studies
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border-warm bg-white p-8 shadow-sm"
              >
                <h3 className="font-heading text-xl font-medium text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Want results like these for your business?
          </h2>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-8 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            Set up 15 min intro call to learn more
          </a>
          <p className="mt-4 text-sm text-text-muted">
            Or email{" "}
            <a
              href="mailto:request@zpteam.ai"
              className="text-slate-blue underline underline-offset-2 transition-colors hover:text-navy"
            >
              request@zpteam.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
