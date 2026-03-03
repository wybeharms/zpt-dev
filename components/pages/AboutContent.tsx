"use client";

import { useI18n } from "@/components/I18nProvider";

export default function AboutContent() {
  const { t, tArray } = useI18n();
  const paragraphs = tArray("about.paragraphs") as string[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("about.title")}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-text-muted">
          {paragraphs.map((p, i) => (
            <p key={i}>{p as string}</p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("about.cta")}
          </a>
          <p className="mt-3 text-sm text-text-muted">
            {t("about.ctaSubtext")}{" "}
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
