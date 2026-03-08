"use client";

import Link from "next/link";
import SalesFunnel from "@/components/SalesFunnel";
import ToolLogos from "@/components/ToolLogos";
import EnrichmentTabs from "@/components/EnrichmentTabs";
import FaqAccordion from "@/components/FaqAccordion";
import { useI18n } from "@/components/I18nProvider";
import { useState } from "react";

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
      <section className="bg-navy px-6 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("sales.hero.title")}
          </h1>
          <p className="mx-auto mt-14 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("sales.hero.audience")}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/trial"
              className="btn-shimmer inline-flex min-w-[200px] items-center justify-center rounded px-6 py-3 text-sm font-medium text-navy"
            >
              {t("sales.hero.primaryCta")}
            </Link>
            <a
              href="#how-we-get-started"
              className="inline-flex min-w-[200px] items-center justify-center rounded border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {t("sales.hero.secondaryCta")}
            </a>
          </div>
          <p className="mt-8 text-sm text-gold">
            {t("sales.hero.trialNote")}
          </p>
        </div>
      </section>

      {/* What ZPT Sales is */}
      <section className="bg-off-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("sales.intro.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-muted">
            {t("sales.intro.description")}
          </p>
          {/* Comparison: Generic vs ZPT Sales vs DIY */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3 md:gap-10">
            {/* Generic sales tools — muted */}
            <div className="rounded-lg border-2 border-gold/30 bg-white/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
                {t("sales.intro.comparison.genericTitle")}
              </p>
              <div className="mt-5 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border-warm bg-off-white">
                  <svg className="h-7 w-7 text-text-muted/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 3.75v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <svg className="h-4 w-4 text-text-muted/30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="rounded border border-border-warm bg-off-white px-3 py-1.5 text-xs text-text-muted/50">
                  Output
                </div>
              </div>
              <p className="mt-5 text-sm text-text-muted/60">
                {t("sales.intro.comparison.genericLine")}
              </p>
            </div>

            {/* ZPT Sales — navy bg, gold accents, scaled up */}
            <div className="rounded-xl border-2 border-gold bg-navy p-7 shadow-lg md:scale-105">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {t("sales.intro.comparison.zptTitle")}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {/* Google Maps */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 p-1.5">
                  <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                {/* Web search */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 p-1.5">
                  <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                {/* Email verification */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 p-1.5">
                  <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12l2.25 2.25L16.5 16.5" strokeWidth={2} className="text-gold" />
                  </svg>
                </div>
                {/* MCP — with hover tooltip */}
                <div className="group relative flex h-10 items-center rounded-lg border border-white/15 bg-white/10 px-2.5">
                  <span className="cursor-default text-[11px] font-semibold text-gold">MCP</span>
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-44 -translate-x-1/2 rounded-lg border border-border-warm bg-white p-3 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy">Available MCPs</p>
                    <ul className="space-y-1 text-[11px] text-text-muted">
                      <li>SEC filings</li>
                      <li>EDGAR database</li>
                      <li>French gov. open data</li>
                      <li>Company registries</li>
                      <li className="text-gold">+ growing every week</li>
                    </ul>
                  </div>
                </div>
                {/* + your sources */}
                <div className="flex h-10 items-center rounded-lg border border-dashed border-gold/50 bg-gold/10 px-2.5">
                  <span className="text-[11px] font-medium text-gold">{t("sales.intro.comparison.plusYours")}</span>
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className="mt-1 flex justify-center">
                <div className="rounded-lg border-2 border-gold bg-gold px-4 py-2 text-xs font-bold text-navy">
                  AI Agent
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className="mt-1 flex justify-center">
                <div className="rounded border border-gold/40 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                  Output
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">
                {t("sales.intro.comparison.zptLine")}
              </p>
            </div>

            {/* DIY — gold border, black title, grey body */}
            <div className="rounded-lg border-2 border-gold/30 bg-white/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                {t("sales.intro.comparison.diyTitle")}
              </p>
              <div className="mt-5 flex justify-center">
                <img src="/logos/claude_desktop.png" alt="Claude Desktop" className="h-14 w-14 rounded-lg object-contain" />
              </div>
              <div className="mt-2 flex justify-center gap-2">
                <span className="rounded border border-border-warm bg-off-white px-2 py-1 text-[10px] text-text-muted/50">Skills</span>
                <span className="rounded border border-border-warm bg-off-white px-2 py-1 text-[10px] text-text-muted/50">MCPs</span>
                <span className="rounded border border-border-warm bg-off-white px-2 py-1 text-[10px] text-text-muted/50">Training</span>
              </div>
              <div className="mt-3 flex justify-center">
                <svg className="h-4 w-4 text-text-muted/30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="rounded border border-border-warm bg-off-white px-3 py-1.5 text-xs text-text-muted/50">
                  Output
                </div>
              </div>
              <p className="mt-5 text-sm text-text-muted/60">
                {t("sales.intro.comparison.diyLine")}
              </p>
              <p className="mt-3 text-xs text-text-muted/50">
                {t("sales.intro.comparison.diyAdvisory")}{" "}
                <Link href="/advisory" className="text-gold underline underline-offset-2 transition-colors hover:text-navy">
                  {t("sales.intro.comparison.diyAdvisoryLink")}
                </Link>
              </p>
            </div>
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
          <Link href="/trial" className="mx-auto mt-8 block w-fit rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-center transition-colors hover:bg-gold/20">
            <p className="text-base font-semibold text-navy">
              {t("sales.onboarding.callout")}
              <span className="ml-2 text-sm font-medium text-gold">{t("sales.onboarding.trialCta")}</span>
            </p>
          </Link>
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
                  <Link
                    href="/trial"
                    className={`mt-auto block rounded py-2.5 text-center text-sm font-medium transition-colors ${
                      isHighlight
                        ? "btn-shimmer text-navy"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    {t("sales.pricing.cta")}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
