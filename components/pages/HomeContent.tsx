"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function HomeContent() {
  const { t, tArray } = useI18n();
  const cases = tArray("home.proof.cases") as {
    company: string;
    stat: string;
  }[];
  const practicalBullets = tArray("home.practical.bullets") as string[];
  const day1Tools = tArray("home.growing.day1Tools") as string[];
  const month3Tools = tArray("home.growing.month3Tools") as string[];
  const useCases = tArray("home.bottleneck.useCases") as {
    title: string;
    description: string;
    why: string;
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
          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70"
            dangerouslySetInnerHTML={{ __html: t("home.hero.description") }}
          />
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-8 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("home.hero.cta")}
          </a>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/advisory"
              className="inline-flex min-w-[220px] items-center justify-center rounded border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {t("home.hero.teamCta")}
            </Link>
            <Link
              href="/sales"
              className="inline-flex min-w-[220px] items-center justify-center rounded border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {t("home.hero.salesCta")}
            </Link>
          </div>
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

      {/* What this means for you */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.practical.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
            {t("home.practical.intro")}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
            {t("home.practical.description")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {practicalBullets.map((bullet) => (
              <span
                key={bullet}
                className="rounded-full border border-border-warm bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-gold/40 hover:bg-gold/10"
              >
                {bullet}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-[#DE7356]">
            {t("home.practical.followup")}
          </p>
        </div>
      </section>

      {/* How It Works — Agent on top of company setup */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.howItWorks.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
            {t("home.howItWorks.intro")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-0">
            {/* Agent — Brain + Loop + Hands */}
            <div className="w-full max-w-2xl rounded-lg border border-border-warm bg-white p-8">
              <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
                {t("home.howItWorks.agent")}
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                {/* Brain */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                    <svg className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-navy">
                    {t("home.howItWorks.brain.title")}
                  </span>
                  <p className="max-w-[140px] text-xs leading-snug text-text-muted">
                    {t("home.howItWorks.brain.description")}
                  </p>
                </div>

                {/* Animated loop arrows */}
                <div className="flex h-14 w-14 items-center justify-center">
                  <svg
                    className="h-10 w-10 animate-[spin_4s_linear_infinite] text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M21.015 4.356v4.992" />
                  </svg>
                </div>

                {/* Hands */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                    <svg className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-navy">
                    {t("home.howItWorks.hands.title")}
                  </span>
                  <p className="max-w-[140px] text-xs leading-snug text-text-muted">
                    {t("home.howItWorks.hands.description")}
                  </p>
                </div>
              </div>

              {/* Horizontal curly bracket */}
              <div className="mx-auto mt-4 w-3/4">
                <svg viewBox="0 0 200 24" className="w-full" preserveAspectRatio="none">
                  <path
                    d="M0,2 Q25,2 45,10 Q65,18 100,18 Q135,18 155,10 Q175,2 200,2"
                    fill="none"
                    stroke="#DE7356"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <line x1="100" y1="18" x2="100" y2="24" stroke="#DE7356" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Harness label */}
              <p className="mt-1 text-center text-xs italic text-text-muted">
                <strong>Claude Code</strong> / <strong>Codex</strong> / <strong>Gemini CLI</strong> = &ldquo;harness&rdquo;
              </p>
            </div>

            {/* Connector arrow down */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-px bg-border-warm" />
              <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Folder */}
            <div className="w-full max-w-sm rounded-lg border-2 border-gold bg-white p-4 text-center">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-navy">
                {t("home.howItWorks.folder.title")}
              </span>
              <p
                className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-text-muted"
                dangerouslySetInnerHTML={{ __html: t("home.howItWorks.folder.description") }}
              />
            </div>
          </div>

          {/* Folder callout */}
          <p className="mt-4 text-center text-sm italic text-gold">
            {t("home.howItWorks.folderCallout")}
          </p>

          {/* Desktop access note */}
          <p className="mt-4 text-center text-sm text-text-muted">
            {t("home.howItWorks.access")}
          </p>
        </div>
      </section>

      {/* Real-life examples */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.bottleneck.title")}
          </h2>

          {/* Use case cards — hover to reveal "why" */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="group relative h-[180px] overflow-hidden rounded-lg border border-border-warm bg-white p-5"
              >
                {/* Default content: title + description */}
                <h3 className="text-base font-semibold text-navy">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {uc.description}
                </p>
                {/* Hover overlay with "why" — desktop only */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-white via-white/95 to-transparent px-5 pb-4 pt-8 opacity-0 transition-opacity duration-200 md:group-hover:opacity-100">
                  <p className="text-xs font-medium italic text-[#DE7356]">
                    {uc.why}
                  </p>
                </div>
                {/* Mobile: always show "why" */}
                <p className="mt-2 text-xs font-medium italic text-[#DE7356] md:hidden">
                  {uc.why}
                </p>
              </div>
            ))}
          </div>

          {/* Screenshot with Claude logo + caption */}
          <div className="mt-10 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/logos/claude.png"
                alt="Claude"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <p className="text-base font-semibold text-navy">
                {t("home.bottleneck.screenshotLabel")}
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-border-warm shadow-sm">
              <Image
                src="/screenshots/claude_cowork.png"
                alt="Claude finding new prospects by checking HubSpot and searching Google Maps"
                width={1400}
                height={900}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center text-xs text-text-muted">
              {t("home.bottleneck.screenshotCaption")}
            </p>
          </div>
        </div>
      </section>

      {/* A folder that grows with you */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.growing.title")}
          </h2>
          <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:gap-4">
            {/* Day 1 */}
            <div className="flex min-h-[220px] w-full flex-col rounded-lg border border-border-warm bg-white p-6 md:w-2/5">
              <h3 className="text-center text-lg font-semibold text-navy">
                {t("home.growing.day1")}
              </h3>
              <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center">
                <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                {day1Tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border-warm bg-off-white px-3 py-1 text-xs text-text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1 text-center md:w-1/5">
              <svg className="hidden h-6 w-6 text-gold md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <svg className="h-6 w-6 text-gold md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
              <span className="text-xs leading-tight text-text-muted">
                {t("home.growing.arrow")}
              </span>
            </div>

            {/* Month 3 */}
            <div className="flex min-h-[220px] w-full flex-col rounded-lg border border-gold/30 bg-white p-6 md:w-2/5">
              <h3 className="text-center text-lg font-semibold text-gold">
                {t("home.growing.month3")}
              </h3>
              <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center">
                <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                {month3Tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-text-muted">
            {t("home.growing.caption")}
          </p>
        </div>
      </section>

      {/* Two products */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.products.title")}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Link href="/sales" className="group rounded-lg border border-gold/30 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
              <h3 className="text-2xl font-semibold text-navy">
                {t("home.products.sales.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
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
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
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
