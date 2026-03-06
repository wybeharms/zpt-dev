"use client";

import SalesFunnel from "@/components/SalesFunnel";
import ToolLogos from "@/components/ToolLogos";
import EnrichmentTabs from "@/components/EnrichmentTabs";
import FaqAccordion from "@/components/FaqAccordion";
import { useI18n } from "@/components/I18nProvider";

const iconPaths: Record<string, string> = {
  chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  table: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m0-2.25c.621 0 1.125.504 1.125 1.125",
  building: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  bolt: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
};

function IdealCustomerIcon({ name }: { name: string }) {
  const d = iconPaths[name];
  if (!d) return null;
  return (
    <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function SalesContent() {
  const { t, tArray } = useI18n();
  const tiers = tArray("sales.pricing.tiers") as {
    name: string;
    price: string;
    period: string;
    features: string[];
  }[];
  const idealCustomerItems = tArray("sales.idealCustomer.items") as {
    text: string;
    icon: string;
  }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("sales.hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {t("sales.hero.audience")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:request@zpteam.ai?subject=Sales inquiry"
              className="inline-flex min-w-[200px] items-center justify-center rounded bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
            >
              {t("sales.hero.primaryCta")}
            </a>
            <a
              href="#how-we-get-started"
              className="inline-flex min-w-[200px] items-center justify-center rounded border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {t("sales.hero.secondaryCta")}
            </a>
          </div>
          <p className="mt-6 text-sm text-gold">
            {t("sales.hero.trialNote")}
          </p>
        </div>
      </section>

      {/* What ZPT Sales is */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.intro.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-muted">
            {t("sales.intro.description")}
          </p>
          <div className="mx-auto mt-6 w-fit rounded-lg border border-gold/30 bg-gold/10 px-5 py-3 text-center">
            <p className="text-sm font-semibold text-navy">
              {t("sales.intro.note")}
            </p>
          </div>
        </div>
      </section>

      {/* How we get started */}
      <section id="how-we-get-started" className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.onboarding.title")}
          </h2>
          <div className="mt-8 space-y-6">
            {(tArray("sales.onboarding.steps") as { number: string; title: string; description: string }[]).map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 w-fit rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-center">
            <p className="text-base font-semibold text-navy">
              {t("sales.onboarding.callout")}
            </p>
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.funnel.title")}
          </h2>
          <SalesFunnel />
        </div>
      </section>

      {/* Tool integrations + Portal */}
      <ToolLogos portalTitle={t("sales.portal.title")} portalDescription={t("sales.portal.description")} />

      {/* Enrichment templates */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.enrichment.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
            {t("sales.enrichment.description")}
          </p>
          <EnrichmentTabs />
          <p className="mt-4 text-center text-sm text-text-muted">
            {t("sales.enrichment.note")}
          </p>
        </div>
      </section>

      {/* Ideal customer */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.idealCustomer.title")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {idealCustomerItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-lg border border-border-warm bg-white p-5 transition-all hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy/5">
                  <IdealCustomerIcon name={item.icon} />
                </div>
                <p className="text-sm font-medium leading-relaxed text-navy">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("sales.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-white/60">
            {t("sales.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => {
              const isHighlight = i === 1;
              return (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-lg p-6 ${
                    isHighlight
                      ? "border-2 border-gold bg-navy-light"
                      : "border border-white/10 bg-navy-light"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">
                    {tier.name}
                  </h3>
                  <p className="mt-2">
                    <span className="text-3xl font-light text-gold">
                      {tier.price}
                    </span>
                    <span className="text-sm text-white/50">{tier.period}</span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {tier.features.map((feature: string) => (
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
                    className={`mt-auto block rounded py-2.5 text-center text-sm font-medium transition-colors ${
                      isHighlight
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    {t("sales.pricing.cta")}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
