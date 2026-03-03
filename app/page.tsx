import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light leading-tight tracking-tight md:text-6xl">
            The output of a full sales team.
            <br />
            <span className="text-gold">Without hiring one.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            ZPT handles sourcing, enrichment, and outreach using AI agents that
            connect to the tools a company already uses.
          </p>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-10 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            Set up 15 min intro call to learn more
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            The problem
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            A single SDR costs $50k+/year for 200 to 300 outreaches per month.
            Most SMBs pay for tools they barely use, outreach happens in bursts,
            and pipeline dries up between campaigns.
          </p>
        </div>
      </section>

      {/* Two service models */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Two ways to work with ZPT
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Managed Service */}
            <div className="rounded-lg border border-gold/30 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-2xl font-medium text-navy">
                  Managed Service
                </h3>
                <span className="rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
                  Recommended
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-text-muted">
                ZPT runs everything. Enrichment, content, outreach drafting.
                Output delivered via dashboard or pushed to integrations of
                choice (HubSpot, etc.).
              </p>
            </div>

            {/* Self-Deploy */}
            <div className="rounded-lg border border-border-warm bg-white p-8 shadow-sm">
              <h3 className="font-heading text-2xl font-medium text-navy">
                Self-Deploy
              </h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                ZPT deploys the local folder structure and connects it to the
                company&apos;s Claude account. Periodic updates and support
                included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="bg-navy px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            Already operational
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="font-heading text-xl font-medium text-gold">
                Across Logistics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Enriched 20,000 contacts in one day. Replaced a $50k SDR
                function.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-medium text-gold">
                Aix Leasing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Pipeline building in the Dutch equipment leasing market.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-medium text-gold">
                Financial Analytics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                1,300+ contacts prospected across institutional investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            Ready to see what ZPT can do for your business?
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
