"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export default function HomeContent() {
  const { t, tArray } = useI18n();

  const fitItems = tArray("home.proof.fitItems") as string[];
  const whyItems = tArray("home.proof.whyItems") as string[];
  const processSteps = tArray("home.process.steps") as {
    title: string;
    description: string;
  }[];

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
      ([entry]) => {
        if (entry.isIntersecting) setSimplifyVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sticky scroll "How We Work" — active step tracking
  const processRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = processRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      setActiveStep(Math.min(3, Math.floor(progress * 4)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="overflow-hidden bg-navy px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-logo text-xl font-medium leading-tight tracking-tight md:text-2xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-4 font-logo text-xl font-medium text-gold md:text-2xl">
              {t("home.hero.subtitle")}
            </p>
            <p
              className="mx-auto mt-12 max-w-xl text-base leading-relaxed text-white/70 md:mx-0"
              dangerouslySetInnerHTML={{ __html: t("home.hero.description") }}
            />
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="mailto:request@zpteam.ai?subject=Intro call request"
                className="inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
              >
                {t("home.hero.cta")}
              </a>
              <a
                href="/zpt-one-pager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                One-Pager PDF
              </a>
            </div>
          </div>
          <div className="relative hidden flex-shrink-0 md:-mr-28 md:block md:w-96 lg:-mr-36 lg:w-[28rem]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-lg"
              style={{ filter: "brightness(0.95) contrast(1.08) saturate(0.9)" }}
              src="/video/gemini_video_2.mp4"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{ boxShadow: "inset 0 0 20px 10px #0C0C28" }}
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-heading text-xl font-light italic leading-relaxed tracking-tight text-navy md:text-2xl">
            <span className="animate-[glow_4s_ease-in-out_infinite]">
              &ldquo;
            </span>
            {t("home.quote.text")}
            <span className="animate-[glow_4s_ease-in-out_infinite]">
              &rdquo;
            </span>
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

      {/* Section 2: The Problem */}
      <section className="px-6 py-14 lg:px-8" style={{ backgroundColor: "#EAE8DE" }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="font-heading text-2xl font-light tracking-tight text-navy md:text-3xl"
            dangerouslySetInnerHTML={{ __html: t("home.practical.intro") }}
          />
          <p className="mx-auto mt-4 max-w-3xl">
            <span className="animate-[breathe_3s_ease-in-out_infinite] text-xl font-semibold text-gold md:text-2xl">
              {t("home.practical.introOverwhelming")}
              <span className="inline-block w-[1.2em] text-left">
                {".".repeat(dotCount)}
              </span>
            </span>
          </p>

          {/* News screenshot collage — mobile */}
          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-1 sm:hidden">
            <Image src="/screenshots/software-stocks.png" alt="Anthropic's new AI tool sends shudders through software stocks" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/mcp-dangerous.png" alt="OpenAI adds powerful but dangerous support for MCP" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/google_cli.png" alt="Google launches CLI for AI agents" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/anthropic-skills-fear.png" alt="Anthropic announces new Claude plugins to automate HR, banking and research" width={600} height={150} className="w-full rounded border border-border-warm shadow-sm" />
            <Image src="/screenshots/in-house-legal-fears.png" alt="AI disruption fears deepen after Anthropic targets in-house legal teams" width={600} height={80} className="w-full rounded border border-border-warm shadow-sm" />
          </div>
          {/* News screenshot collage — desktop */}
          <div className="relative mx-auto mt-8 hidden h-[160px] max-w-lg sm:block">
            <Image src="/screenshots/software-stocks.png" alt="Anthropic's new AI tool sends shudders through software stocks" width={400} height={120} className="absolute left-0 top-0 w-[46%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(-1.5deg)" }} />
            <Image src="/screenshots/mcp-dangerous.png" alt="OpenAI adds powerful but dangerous support for MCP" width={400} height={120} className="absolute right-0 top-0 w-[42%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(1deg)" }} />
            <Image src="/screenshots/google_cli.png" alt="Google launches CLI for AI agents" width={400} height={120} className="absolute left-1/2 top-1/2 z-10 w-[42%] rounded border border-border-warm shadow-md" style={{ transform: "translate(-50%, -50%) rotate(-0.5deg)" }} />
            <Image src="/screenshots/anthropic-skills-fear.png" alt="Anthropic announces new Claude plugins" width={400} height={120} className="absolute bottom-0 left-[2%] w-[44%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(0.5deg)" }} />
            <Image src="/screenshots/in-house-legal-fears.png" alt="AI disruption fears deepen" width={400} height={80} className="absolute bottom-0 right-0 w-[40%] rounded border border-border-warm shadow-sm" style={{ transform: "rotate(-1deg)" }} />
          </div>

          {/* Scroll-reveal card */}
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

      {/* Section 3: How We Work — Mobile (simple stack) */}
      <section className="bg-off-white px-6 py-14 md:hidden">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy">
            {t("home.process.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("home.process.description")}
          </p>
          <div className="mt-8 space-y-4">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-warm bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-navy underline underline-offset-4 transition-colors hover:text-gold"
            >
              {t("home.process.link")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: How We Work — Desktop (sticky scroll) */}
      <section
        ref={processRef}
        className="relative hidden bg-off-white md:block"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 flex min-h-screen items-center px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-5xl gap-16">
            {/* Left: heading + link */}
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("home.process.title")}
              </h2>
              <p className="mt-4 max-w-md text-text-muted">
                {t("home.process.description")}
              </p>
              <Link
                href="/how-it-works"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy underline underline-offset-4 transition-colors hover:text-gold"
              >
                {t("home.process.link")} &rarr;
              </Link>
            </div>
            {/* Right: scroll-driven tabs */}
            <div className="flex-1">
              <div className="space-y-3">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border p-5 transition-all duration-500 ${
                      activeStep === i
                        ? "border-gold/40 bg-white shadow-sm"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-500 ${
                          activeStep === i
                            ? "bg-gold text-navy"
                            : "bg-navy/10 text-navy/40"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <h3
                        className={`text-base font-semibold transition-colors duration-500 ${
                          activeStep === i ? "text-navy" : "text-navy/40"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === i
                          ? "mt-3 max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Good Fit + Why ZPT */}
      <section className="bg-navy px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("home.proof.title")}
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gold">
                {t("home.proof.fitTitle")}
              </h3>
              <ul className="mt-6 space-y-3">
                {fitItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold">
                {t("home.proof.whyTitle")}
              </h3>
              <ul className="mt-6 space-y-3">
                {whyItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span className="flex-shrink-0 text-gold">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Advisory Tiers */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("advisory.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {(
              tArray("advisory.pricing.tiers") as {
                name: string;
                time: string;
                description: string;
              }[]
            ).map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col items-center rounded-xl border border-navy/15 bg-navy-light p-8 text-center"
              >
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-gold">
                  {tier.time}
                </p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-white/50">
                  {tier.description}
                </p>
                <a
                  href="mailto:request@zpteam.ai?subject=Advisory inquiry"
                  className="mt-6 block w-full rounded-lg border border-white/20 py-2.5 text-center text-xs font-medium text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
                >
                  {t("advisory.pricing.cta")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.cta.title")}
          </h2>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-6 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("advisory.cta.button")}
          </a>
          <p className="mt-3 text-sm text-text-muted">
            {t("advisory.cta.email")}{" "}
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
