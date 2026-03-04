"use client";

import { useI18n } from "@/components/I18nProvider";

export default function ResourcesContent() {
  const { t, tArray } = useI18n();
  const cases = tArray("resources.cases") as {
    title: string;
    description: string;
  }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("resources.title")}
          </h1>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("resources.subtitle")}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {cases.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-warm bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("resources.cta.title")}
          </h2>
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="mt-6 inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("resources.cta.button")}
          </a>
          <p className="mt-3 text-sm text-text-muted">
            {t("resources.cta.email")}{" "}
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
