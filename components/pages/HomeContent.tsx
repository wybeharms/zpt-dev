"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function HomeContent() {
  const { t, tArray } = useI18n();
  const cases = tArray("home.proof.cases") as {
    company: string;
    stat: string;
  }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light leading-tight tracking-tight md:text-6xl">
            {t("home.hero.title")}
            <br />
            <span className="text-gold">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("home.hero.description")}
          </p>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-8 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("home.hero.cta")}
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-heading text-2xl font-light leading-relaxed tracking-tight text-navy md:text-3xl">
            &ldquo;{t("home.quote.text")}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-text-muted">
            -{" "}
            <a
              href="https://www.youtube.com/shorts/VaGOdcn3Dqo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-navy"
            >
              {t("home.quote.attribution")}
            </a>
          </p>
        </div>
      </section>

      {/* Two products */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.products.title")}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Link href="/sales" className="group rounded-lg border border-gold/30 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-navy">
                  {t("home.products.sales.title")}
                </h3>
                <span className="rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
                  {t("home.products.sales.badge")}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-text-muted">
                {t("home.products.sales.description")}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gold group-hover:underline">
                {t("home.products.sales.link")} &rarr;
              </span>
            </Link>
            <Link href="/advisory" className="group rounded-lg border border-border-warm bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
              <h3 className="text-2xl font-semibold text-navy">
                {t("home.products.advisory.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-text-muted">
                {t("home.products.advisory.description")}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gold group-hover:underline">
                {t("home.products.advisory.link")} &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("home.proof.title")}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {cases.map((c, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-semibold text-gold">
                  {c.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {c.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.cta.title")}
          </h2>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-6 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("home.cta.button")}
          </a>
          <p className="mt-3 text-sm text-text-muted">
            {t("home.cta.email")}{" "}
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
