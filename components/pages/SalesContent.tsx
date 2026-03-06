"use client";

import SalesFunnel from "@/components/SalesFunnel";
import ToolLogos from "@/components/ToolLogos";
import EnrichmentTabs from "@/components/EnrichmentTabs";
import FaqAccordion from "@/components/FaqAccordion";
import { useI18n } from "@/components/I18nProvider";

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
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("sales.hero.description")}
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
          <p className="mt-4 text-sm text-gold">
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
      <section id="how-we-get-started" className="bg-off-white px-6 py-14 lg:px-8">
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
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.funnel.title")}
          </h2>
          <SalesFunnel />
        </div>
      </section>

      {/* Tool integrations */}
      <ToolLogos />

      {/* Portal visibility */}
      <section className="bg-cream px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-border-warm bg-white p-6 text-center">
          <h2 className="font-heading text-2xl font-light tracking-tight text-navy md:text-3xl">
            {t("sales.portal.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {t("sales.portal.description")}
          </p>
        </div>
      </section>

      {/* Enrichment templates */}
      <section className="bg-cream px-6 py-14 lg:px-8">
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
      <section className="bg-off-white px-6 py-14 lg:px-8">
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
                <span className="flex-shrink-0 text-2xl">{item.icon}</span>
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
