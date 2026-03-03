import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ZPT -- AI Sales Agents",
  description:
    "ZPT started as a sales folder for a financial analytics startup. The system ended up more valuable than the product it was built to sell. Now operational across three industries.",
  alternates: {
    canonical: "https://zpteam.ai/about",
  },
  openGraph: {
    title: "About ZPT -- AI Sales Agents",
    description:
      "ZPT started as a sales folder for a financial analytics startup. Now operational across three industries.",
    url: "https://zpteam.ai/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            About ZPT
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
          <p>
            ZPT started as a sales folder for a financial analytics startup. The
            system, markdown files, AI agents, and structured workflows, ended
            up more valuable than the product it was built to sell.
          </p>
          <p>
            Two other companies asked for their own version. ZPT became a
            standalone product.
          </p>
          <p>
            Today, ZPT operates across three industries: financial analytics,
            equipment leasing, and logistics. Same system, different context.
          </p>
          <p>
            The vision: give any B2B company the output of a full sales team at
            a fraction of the cost, using AI agents that connect to the tools
            the company already uses.
          </p>
          <p>ZPT is based in Europe. The product is live and operational.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Interested in learning more?
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
