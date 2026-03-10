"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

const team = [
  {
    key: "beer",
    image: "/profile_pic/Beer.png",
    linkedin: "https://www.linkedin.com/in/berend-harms-905609209/",
  },
  {
    key: "arnau",
    image: "/profile_pic/Arnau.png",
    linkedin:
      "https://www.linkedin.com/in/arnaurib%C3%A9ifernandez/",
  },
];

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

      {/* Team + Description */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Team cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.key} className="flex flex-col items-center text-center">
                <div className="relative h-52 w-36 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={t(`about.team.${member.key}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                  {t(`about.team.${member.key}.name`)}
                </h3>
                <p className="text-sm font-medium text-gold">
                  {t(`about.team.${member.key}.role`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {t(`about.team.${member.key}.bio`)}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-slate-blue transition-colors hover:text-navy"
                  aria-label={`${t(`about.team.${member.key}.name`)} on LinkedIn`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Description below team */}
          <div className="mt-12 space-y-5 text-lg leading-relaxed text-text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p as string}</p>
            ))}
          </div>
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
