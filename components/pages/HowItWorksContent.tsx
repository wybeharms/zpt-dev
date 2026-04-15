"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export default function HowItWorksContent() {
  const { t, tArray } = useI18n();

  const consultingPoints = tArray("advisory.consulting.points") as string[];
  const nativeToolsParagraphs = tArray(
    "advisory.nativeTools.paragraphs"
  ) as string[];
  const useCases = tArray("home.bottleneck.useCases") as {
    title: string;
    description: string;
    why: string;
  }[];
  const expectationItems = tArray("home.expectations.items") as {
    title: string;
    description: string;
  }[];

  // Helicopter scroll animation
  const helicopterSectionRef = useRef<HTMLDivElement>(null);
  const stickmanRef = useRef<SVGGElement>(null);
  const upperRopeRef = useRef<SVGLineElement>(null);
  const lowerRopeRef = useRef<SVGLineElement>(null);
  const buildingRef = useRef<SVGRectElement>(null);
  const windowRefs = useRef<(SVGRectElement | null)[]>([]);
  const confettiRef = useRef<SVGGElement>(null);
  const hasLandedRef = useRef(false);

  useEffect(() => {
    const ROPE_START = 88;
    const PERSON_TOP = 92;
    const PERSON_BOTTOM = 158;
    const PERSON_ATTACH = 108;
    const LANDING_Y = 290;
    const LANDING_TOP = LANDING_Y - (PERSON_BOTTOM - PERSON_TOP);

    const spawnConfetti = () => {
      const g = confettiRef.current;
      if (!g) return;
      const cx = 96;
      const cy = LANDING_Y + 15;
      for (let i = 0; i < 16; i++) {
        const angle =
          (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.4;
        const speed = 40 + Math.random() * 50;
        const size = 2 + Math.random() * 3;
        const el = document.createElementNS(
          "http://www.w3.org/2000/svg",
          Math.random() > 0.5 ? "circle" : "rect"
        );
        if (el.tagName === "circle") {
          el.setAttribute("r", String(size));
        } else {
          el.setAttribute("width", String(size * 1.5));
          el.setAttribute("height", String(size * 1.5));
          el.setAttribute("rx", "1");
        }
        el.setAttribute(
          "fill",
          i % 3 === 0
            ? "#C9A96E"
            : i % 3 === 1
              ? "#E8D5A8"
              : "#0C0C28"
        );
        el.setAttribute("opacity", "1");
        g.appendChild(el);

        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed - 20;
        let frame = 0;
        const totalFrames = 35 + Math.floor(Math.random() * 15);
        const animate = () => {
          frame++;
          const t = frame / totalFrames;
          const ease = 1 - (1 - t) * (1 - t);
          const x = cx + dx * ease;
          const y = cy + dy * ease + 30 * t * t;
          if (el.tagName === "circle") {
            el.setAttribute("cx", String(x));
            el.setAttribute("cy", String(y));
          } else {
            el.setAttribute("x", String(x));
            el.setAttribute("y", String(y));
          }
          el.setAttribute("opacity", String(Math.max(0, 1 - t)));
          if (frame < totalFrames) {
            requestAnimationFrame(animate);
          } else {
            el.remove();
          }
        };
        requestAnimationFrame(animate);
      }
    };

    const lightWindows = () => {
      windowRefs.current.forEach((w, i) => {
        if (!w) return;
        setTimeout(() => {
          w.style.fill = "rgba(201,169,110,0.35)";
        }, i * 90);
      });
    };

    const update = () => {
      const el = helicopterSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.55 - rect.top) / (vh * 0.35))
      );

      const ty =
        ROPE_START - PERSON_TOP + progress * (LANDING_TOP - ROPE_START);
      const landed = progress > 0.92;

      stickmanRef.current?.setAttribute("transform", `translate(0 ${ty})`);
      upperRopeRef.current?.setAttribute(
        "y2",
        String(PERSON_ATTACH + ty)
      );
      if (lowerRopeRef.current) {
        lowerRopeRef.current.setAttribute(
          "y1",
          String(Math.min(PERSON_BOTTOM + ty, LANDING_Y))
        );
        lowerRopeRef.current.setAttribute(
          "opacity",
          String(progress > 0.7 ? (progress - 0.7) / 0.3 : 0)
        );
      }
      if (buildingRef.current) {
        buildingRef.current.style.stroke = landed ? "#C9A96E" : "";
      }

      if (landed && !hasLandedRef.current) {
        hasLandedRef.current = true;
        spawnConfetti();
        lightWindows();
      }
      if (!landed && hasLandedRef.current) {
        hasLandedRef.current = false;
        windowRefs.current.forEach((w) => {
          if (w) w.style.fill = "none";
        });
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Use case card stagger-in
  const useCaseRef = useRef<HTMLDivElement>(null);
  const [useCasesVisible, setUseCasesVisible] = useState(false);
  useEffect(() => {
    const el = useCaseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setUseCasesVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("howItWorks.hero.title")}
          </h1>
          <p className="mt-4 text-white/70">
            {t("howItWorks.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Section 1: Helicopter Animation + Consulting Steps */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div
            ref={helicopterSectionRef}
            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12"
          >
            {/* Helicopter SVG */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-56">
              <svg
                className="h-[440px] w-48 text-navy"
                fill="none"
                viewBox="0 0 192 440"
                strokeWidth={1.2}
                stroke="currentColor"
              >
                <line x1="28" y1="22" x2="164" y2="22" strokeWidth={2.5} className="text-gold" />
                <ellipse cx="96" cy="22" rx="4" ry="4" fill="currentColor" className="text-gold" />
                <line x1="96" y1="22" x2="96" y2="40" strokeWidth={2} />
                <ellipse cx="96" cy="58" rx="36" ry="18" strokeWidth={2} />
                <path d="M113 51 Q123 58 113 65" strokeWidth={1.5} className="text-gold" />
                <line x1="60" y1="54" x2="36" y2="45" strokeWidth={2} />
                <line x1="36" y1="45" x2="36" y2="36" strokeWidth={2} />
                <line x1="29" y1="36" x2="43" y2="36" strokeWidth={2} className="text-gold" />
                <line x1="72" y1="74" x2="72" y2="88" strokeWidth={1.5} />
                <line x1="120" y1="74" x2="120" y2="88" strokeWidth={1.5} />
                <line x1="60" y1="88" x2="132" y2="88" strokeWidth={2} />
                <line ref={upperRopeRef} x1="96" y1="88" x2="96" y2="104" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />
                <g ref={stickmanRef} transform="translate(0 -4)">
                  <circle cx="96" cy="100" r="8" strokeWidth={2} className="text-navy" fill="#FAFAF7" />
                  <line x1="96" y1="108" x2="96" y2="138" strokeWidth={2.2} className="text-navy" />
                  <line x1="96" y1="117" x2="79" y2="129" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="117" x2="113" y2="129" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="138" x2="82" y2="158" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="138" x2="110" y2="158" strokeWidth={2} className="text-navy" />
                  <rect x="113" y="123" width="12" height="9" rx="1.5" strokeWidth={1.5} className="text-gold" />
                </g>
                <line ref={lowerRopeRef} x1="96" y1="154" x2="96" y2="296" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" opacity="0" />
                <rect ref={buildingRef} x="46" y="300" width="100" height="72" rx="4" strokeWidth={2} className="text-navy" style={{ transition: "stroke 0.4s ease" }} />
                <line x1="46" y1="318" x2="146" y2="318" strokeWidth={1} className="text-navy" opacity="0.3" />
                <rect ref={(el) => { windowRefs.current[0] = el; }} x="60" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[1] = el; }} x="88" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[2] = el; }} x="116" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[3] = el; }} x="60" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[4] = el; }} x="88" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[5] = el; }} x="116" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <g ref={confettiRef} />
              </svg>
            </div>
            {/* Consulting text */}
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("advisory.consulting.title")}
              </h2>
              <p className="mt-3 text-text-muted">
                {t("advisory.consulting.description")}
              </p>
              <ul className="mt-6 space-y-5">
                {consultingPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-gold">+</span>
                    <span>
                      {point as string}
                      {i === 1 && (
                        <>
                          {" ("}
                          <Link
                            href="/technology#folder-structure"
                            className="text-navy underline underline-offset-2 transition-colors hover:text-gold"
                          >
                            {t("advisory.consulting.exampleLink")}
                          </Link>
                          {")"}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-block rounded-lg border border-gold/30 bg-gold/10 px-5 py-3">
                <p className="text-sm font-semibold text-navy">
                  {t("advisory.consulting.callout")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Use Case Cards */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div ref={useCaseRef} className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-light tracking-tight text-navy md:text-3xl">
            {t("home.bottleneck.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
            {t("home.bottleneck.subtitle")}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`group relative h-[180px] overflow-hidden rounded-lg border border-border-warm bg-white p-5 transition-all duration-500 ${
                  useCasesVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: useCasesVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-base font-semibold text-navy">
                  {uc.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-text-muted"
                  dangerouslySetInnerHTML={{ __html: uc.description }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-white via-white/95 to-transparent px-5 pb-4 pt-8 opacity-0 transition-opacity duration-200 md:group-hover:opacity-100">
                  <p className="text-xs font-medium italic text-[#DE7356]">
                    {uc.why}
                  </p>
                </div>
                <p className="mt-2 text-xs font-medium italic text-[#DE7356] md:hidden">
                  {uc.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Native Tools Objection */}
      <section className="bg-off-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("advisory.nativeTools.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {nativeToolsParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-text-muted"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
            {/* Interchangeable provider visual */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-52">
              <div className="rounded-xl border border-border-warm bg-white p-6">
                <div className="flex justify-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <Image src="/logos/claude.png" alt="Claude" width={40} height={40} className="h-10 w-10 object-contain" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <Image src="/logos/openai.png" alt="ChatGPT" width={40} height={40} className="h-10 w-10 object-contain" />
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-text-muted">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <span>{t("advisory.agentVisual.interchangeable")}</span>
                </div>
                <div className="my-3 flex flex-col items-center gap-0">
                  <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <svg className="h-4 w-4 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gold bg-navy p-2">
                    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-text-muted">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span>{t("advisory.agentVisual.yourFolder")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Engagement Types */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("advisory.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(
              tArray("advisory.pricing.tiers") as {
                name: string;
                time: string;
                description: string;
              }[]
            ).map((tier, i) => {
              const isHighlight = i === 1;
              return (
                <div
                  key={tier.name}
                  className={`flex flex-col items-center rounded-lg p-7 text-center ${
                    isHighlight
                      ? "border-2 border-gold bg-navy-light"
                      : "border border-navy/20 bg-navy-light"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold">
                    {tier.time}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {tier.description}
                  </p>
                  <a
                    href="mailto:request@zpteam.ai?subject=Advisory inquiry"
                    className={`mt-6 block w-full rounded py-2.5 text-center text-sm font-medium transition-colors ${
                      isHighlight
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-white/30 text-white hover:bg-white/10"
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

      {/* Section 5: What We Expect From You */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.expectations.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {expectationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border-warm bg-white p-6 text-center"
              >
                <h3 className="text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
