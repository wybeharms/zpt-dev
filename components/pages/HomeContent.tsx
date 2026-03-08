"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export default function HomeContent() {
  const { t, tArray } = useI18n();
  const cases = tArray("home.proof.cases") as {
    company: string;
    stat: string;
  }[];
  const practicalBullets = tArray("home.practical.bullets") as string[];

  // Animated dots on "It's overwhelming..."
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setDotCount((c) => (c % 3) + 1), 500);
    return () => clearInterval(id);
  }, []);

  // Scroll-reveal for "ZPT simplifies" card
  const simplifyRef = useRef<HTMLDivElement>(null);
  const [simplifyVisible, setSimplifyVisible] = useState(false);
  useEffect(() => {
    const el = simplifyRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSimplifyVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
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
          </h1>
          <p className="mt-4 font-heading text-4xl font-light text-gold md:text-6xl">
            {t("home.hero.subtitle")}
          </p>
          <p
            className="mx-auto mt-14 max-w-xl text-lg leading-relaxed text-white/70"
            dangerouslySetInnerHTML={{ __html: t("home.hero.description") }}
          />
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/advisory"
              className="inline-flex min-w-[260px] items-center justify-center rounded border-2 border-gold/50 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold hover:bg-gold/10"
            >
              <span className="font-bold">{t("home.hero.teamCtaPrefix")}</span>&nbsp;{t("home.hero.teamCtaLabel")}
            </Link>
            <Link
              href="/sales"
              className="inline-flex min-w-[260px] items-center justify-center rounded border-2 border-gold/50 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold hover:bg-gold/10"
            >
              <span className="font-bold">{t("home.hero.salesCtaPrefix")}</span>&nbsp;{t("home.hero.salesCtaLabel")}
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-heading text-xl font-light italic leading-relaxed tracking-tight text-navy md:text-2xl">
            <span className="animate-[glow_4s_ease-in-out_infinite]">&ldquo;</span>
            {t("home.quote.text")}
            <span className="animate-[glow_4s_ease-in-out_infinite]">&rdquo;</span>
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
          <h2
            className="font-heading text-2xl font-light tracking-tight text-navy md:text-3xl"
            dangerouslySetInnerHTML={{ __html: t("home.practical.intro") }}
          />
          <p className="mx-auto mt-4 max-w-3xl">
            <span className="animate-[breathe_3s_ease-in-out_infinite] text-xl font-semibold text-gold md:text-2xl">
              {t("home.practical.introOverwhelming")}
              <span className="inline-block w-[1.2em] text-left">{".".repeat(dotCount)}</span>
            </span>
          </p>

          {/* News screenshot collage — stacked on mobile, overlapping on sm+ */}
          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-1.5 sm:hidden">
            <Image src="/screenshots/software-stocks.png" alt="Anthropic's new AI tool sends shudders through software stocks — CNN" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/mcp-dangerous.png" alt="OpenAI adds powerful but dangerous support for MCP — VentureBeat" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/google_cli.png" alt="Google launches CLI for AI agents" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/anthropic-skills-fear.png" alt="Anthropic announces new Claude plugins to automate HR, banking and research — MSN" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/in-house-legal-fears.png" alt="AI disruption fears deepen after Anthropic targets in-house legal teams" width={600} height={80} className="w-full rounded border border-border-warm shadow-sm" />
          </div>
          <div className="relative mx-auto mt-8 hidden h-[190px] max-w-lg sm:block">
            <Image src="/screenshots/software-stocks.png" alt="Anthropic's new AI tool sends shudders through software stocks — CNN" width={400} height={120} className="absolute left-0 top-0 w-[48%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(-1.5deg)" }} />
            <Image src="/screenshots/mcp-dangerous.png" alt="OpenAI adds powerful but dangerous support for MCP — VentureBeat" width={400} height={120} className="absolute right-0 top-0 w-[44%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(1deg)" }} />
            <Image src="/screenshots/google_cli.png" alt="Google launches CLI for AI agents" width={400} height={120} className="absolute left-1/2 top-1/2 z-10 w-[44%] rounded border border-border-warm shadow-md" style={{ transform: "translate(-50%, -50%) rotate(-0.5deg)" }} />
            <Image src="/screenshots/anthropic-skills-fear.png" alt="Anthropic announces new Claude plugins to automate HR, banking and research — MSN" width={400} height={120} className="absolute bottom-0 left-[2%] w-[46%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(0.5deg)" }} />
            <Image src="/screenshots/in-house-legal-fears.png" alt="AI disruption fears deepen after Anthropic targets in-house legal teams" width={400} height={80} className="absolute bottom-1 right-0 w-[42%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(-1deg)" }} />
          </div>

          {/* Card with scroll-reveal */}
          <div
            ref={simplifyRef}
            className={`mx-auto mt-12 max-w-2xl rounded-xl border border-border-warm bg-white px-8 py-8 shadow-sm transition-all duration-700 ${
              simplifyVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-navy">
              {t("home.practical.introHighlight")}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
              {t("home.practical.description")}
            </p>
          </div>
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
              <p
                className="mt-1 text-center text-xs italic text-text-muted"
                dangerouslySetInnerHTML={{ __html: t("home.howItWorks.harnessLabel") }}
              />
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
      <section className="bg-cream px-6 py-14 lg:px-8">
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
                <p
                  className="mt-2 text-sm leading-relaxed text-text-muted"
                  dangerouslySetInnerHTML={{ __html: uc.description }}
                />
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
            <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-border-warm shadow-sm">
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
