"use client";

import { useI18n } from "@/components/I18nProvider";

export default function AdvisoryContent() {
  const { t, tArray } = useI18n();
  const conceptParagraphs = tArray("advisory.concept.paragraphs") as string[];
  const folders = tArray("advisory.folder.folders") as {
    name: string;
    label: string;
    description: string;
  }[];
  const consultingPoints = tArray("advisory.consulting.points") as string[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("advisory.hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("advisory.hero.description")}
          </p>
        </div>
      </section>

      {/* Core concept */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.concept.title")}
          </h2>
          <div className="mt-6 space-y-4">
            {conceptParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-text-muted">
                {p as string}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Agent visual */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-border-warm bg-white p-8 md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
              {/* AI providers (swappable) */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <img src="/logos/claude.png" alt="Claude" className="h-8 w-8 object-contain" />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <img src="/logos/openai.png" alt="OpenAI" className="h-8 w-8 object-contain" />
                  </div>
                </div>
                {/* Swap indicator */}
                <div className="flex items-center gap-1.5 text-text-muted">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <span className="text-[11px] font-medium">Interchangeable</span>
                </div>
              </div>

              {/* Bidirectional arrows */}
              <div className="flex items-center">
                {/* Mobile: vertical */}
                <div className="flex flex-col items-center md:hidden">
                  <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Desktop: horizontal */}
                <div className="hidden items-center md:flex">
                  <svg className="h-5 w-5 -rotate-90 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <svg className="h-5 w-5 rotate-90 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Local folder (proprietary) */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-gold bg-navy p-3">
                  {/* Folder icon */}
                  <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="text-[11px] font-medium">Your folder</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-text-muted">
            {t("advisory.agentVisual.caption")}
          </p>
          <p className="mt-2 text-center text-sm leading-relaxed text-text-muted">
            {t("advisory.agentVisual.teamNote")}
          </p>
        </div>
      </section>

      {/* Folder structure */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("advisory.folder.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {t("advisory.folder.description")}
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-navy-light p-5 font-logo text-sm">
            <div className="text-gold">example-zpt/</div>
            {folders.map((folder, i) => {
              const isLast = i === folders.length - 1;
              const prefix = isLast ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ";
              return (
                <div key={i} className="mt-1 flex gap-4 pl-2">
                  <span className="flex-shrink-0 whitespace-pre text-white/40">{prefix}</span>
                  <span className="flex-shrink-0 text-white/80">{folder.name}</span>
                  <span className="inline text-white/30">
                    <span className="text-gold/60">{folder.label}</span>
                    {" -- "}
                    {folder.description}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            {t("advisory.folder.note")}
          </p>
        </div>
      </section>

      {/* Consulting */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.consulting.title")}
          </h2>
          <p className="mt-3 text-text-muted">
            {t("advisory.consulting.description")}
          </p>
          <ul className="mt-6 space-y-3">
            {consultingPoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-0.5 flex-shrink-0 text-gold">+</span>
                {point as string}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-white/60">
            {t("advisory.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {(tArray("advisory.pricing.tiers") as { name: string; description: string; features: string[] }[]).map((tier, i) => {
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
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{tier.description}</p>
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
                    href="mailto:request@zpteam.ai?subject=Advisory inquiry"
                    className={`mt-6 block rounded py-2.5 text-center text-sm font-medium transition-colors ${
                      isHighlight
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    {t("advisory.pricing.cta")}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
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
