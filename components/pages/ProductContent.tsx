"use client";

import Pipeline from "@/components/Pipeline";
import EnrichmentTabs from "@/components/EnrichmentTabs";
import { useI18n } from "@/components/I18nProvider";

export default function ProductContent() {
  const { t, tArray } = useI18n();
  const salesSteps = tArray("product.sales.steps") as {
    number: string;
    title: string;
    description: string;
  }[];
  const advisoryPoints = tArray("product.advisory.points") as string[];
  const folders = tArray("product.folder.folders") as {
    name: string;
    label: string;
    description: string;
  }[];
  const tiers = tArray("product.pricing.tiers") as {
    name: string;
    price: string;
    period: string;
    features: string[];
  }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("product.hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("product.hero.description")}
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("product.pipeline.title")}
          </h2>
          <Pipeline />
        </div>
      </section>

      {/* ZPT Sales */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("product.sales.title")}
          </h2>
          <p className="mt-3 text-text-muted">
            {t("product.sales.description")}
          </p>
          <div className="mt-10 space-y-8">
            {salesSteps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="flex-shrink-0 font-heading text-2xl font-light text-gold">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZPT Advisory */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("product.advisory.title")}
          </h2>
          <p className="mt-3 text-text-muted">
            {t("product.advisory.description")}
          </p>
          <ul className="mt-6 space-y-3">
            {advisoryPoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-0.5 flex-shrink-0 text-gold">+</span>
                {point as string}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Folder structure */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("product.folder.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {t("product.folder.description")}
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-navy-light p-5 font-logo text-sm">
            <div className="text-gold">project-name/</div>
            {folders.map((folder, i) => (
              <div key={i} className="mt-2 flex gap-4 pl-4">
                <span className="flex-shrink-0 text-white/80">{folder.name}</span>
                <span className="hidden text-white/30 sm:inline">
                  <span className="text-gold/60">{folder.label}</span>
                  {" \u2014 "}
                  {folder.description}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            {t("product.folder.note")}
          </p>
        </div>
      </section>

      {/* Enrichment templates */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("product.enrichment.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
            {t("product.enrichment.description")}
          </p>
          <EnrichmentTabs />
          <p className="mt-4 text-center text-sm text-text-muted">
            {t("product.enrichment.note")}
          </p>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("product.onboarding.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            {t("product.onboarding.description")}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("product.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-white/60">
            {t("product.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => {
              const isHighlight = i === 1;
              return (
                <div
                  key={tier.name}
                  className={`rounded-lg p-6 ${
                    isHighlight
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
                  <ul className="mt-5 space-y-2">
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
                    className={`mt-6 block rounded py-2.5 text-center text-sm font-medium transition-colors ${
                      isHighlight
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    {t("product.pricing.cta")}
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
