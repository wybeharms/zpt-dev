"use client";

import { useI18n } from "@/components/I18nProvider";
import { useEffect, useRef } from "react";

const whyIcons = [
  // Shield (company-owned)
  <svg key="shield" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Code bracket (open-source)
  <svg key="code" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
  // Folder (Claude Code architecture)
  <svg key="folder" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>,
  // Plug (connects to tools)
  <svg key="plug" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
];

const advisoryToolLogos: { name: string; file: string }[] = [
  { name: "HubSpot", file: "/logos/hubspot.png" },
  { name: "Salesforce", file: "/logos/salesforce.png" },
  { name: "Google Drive", file: "/logos/google-drive.png" },
  { name: "Excel", file: "/logos/excel.png" },
  { name: "PowerPoint", file: "/logos/powerpoint.png" },
  { name: "Notion", file: "/logos/notion.png" },
  { name: "Slack", file: "/logos/slack.png" },
];

function FolderBadge() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-gold bg-navy p-2">
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    </div>
  );
}

export default function AdvisoryContent() {
  const { t, tArray } = useI18n();
  const whatItCanDoItems = tArray("advisory.whatItCanDo.items") as {
    title: string;
    description: string;
  }[];
  const whyItems = tArray("advisory.why.items") as {
    title: string;
    description: string;
  }[];
  const folders = tArray("advisory.folder.folders") as {
    name: string;
    label: string;
    description: string;
  }[];
  const consultingPoints = tArray("advisory.consulting.points") as string[];
  const conceptParagraphs = tArray("advisory.concept.paragraphs") as string[];
  const nativeToolsParagraphs = tArray("advisory.nativeTools.paragraphs") as string[];

  // Scroll animation — direct DOM manipulation via refs (bypasses React render cycle)
  const helicopterSectionRef = useRef<HTMLDivElement>(null);
  const stickmanRef = useRef<SVGGElement>(null);
  const upperRopeRef = useRef<SVGLineElement>(null);
  const lowerRopeRef = useRef<SVGLineElement>(null);
  const buildingRef = useRef<SVGRectElement>(null);
  const windowRefs = useRef<(SVGRectElement | null)[]>([]);
  const doorRef = useRef<SVGRectElement>(null);
  const confettiRef = useRef<SVGGElement>(null);
  const hasLandedRef = useRef(false);

  useEffect(() => {
    const ROPE_START = 88;
    const PERSON_TOP = 92;
    const PERSON_BOTTOM = 158;
    const PERSON_ATTACH = 108;
    const LANDING_Y = 310;
    const LANDING_TOP = LANDING_Y - (PERSON_BOTTOM - PERSON_TOP);

    // Confetti burst — spawns gold particles from the landing zone
    const spawnConfetti = () => {
      const g = confettiRef.current;
      if (!g) return;
      const cx = 96;
      const cy = LANDING_Y + 15;
      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.4;
        const speed = 40 + Math.random() * 50;
        const size = 2 + Math.random() * 3;
        const el = document.createElementNS("http://www.w3.org/2000/svg", Math.random() > 0.5 ? "circle" : "rect");
        if (el.tagName === "circle") {
          el.setAttribute("r", String(size));
        } else {
          el.setAttribute("width", String(size * 1.5));
          el.setAttribute("height", String(size * 1.5));
          el.setAttribute("rx", "1");
        }
        el.setAttribute("fill", i % 3 === 0 ? "#C9A96E" : i % 3 === 1 ? "#E8D5A8" : "#0C0C28");
        el.setAttribute("opacity", "1");
        g.appendChild(el);

        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed - 20; // bias upward
        let frame = 0;
        const totalFrames = 35 + Math.floor(Math.random() * 15);
        const animate = () => {
          frame++;
          const t = frame / totalFrames;
          const ease = 1 - (1 - t) * (1 - t); // ease-out
          const x = cx + dx * ease;
          const y = cy + dy * ease + 30 * t * t; // gravity
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

    // Staggered window lighting
    const lightWindows = () => {
      windowRefs.current.forEach((w, i) => {
        if (!w) return;
        setTimeout(() => {
          w.style.fill = "rgba(201,169,110,0.35)";
        }, i * 90);
      });
      if (doorRef.current) {
        setTimeout(() => {
          doorRef.current!.style.stroke = "#C9A96E";
          doorRef.current!.style.fill = "rgba(201,169,110,0.35)";
        }, windowRefs.current.length * 90);
      }
    };

    const update = () => {
      const el = helicopterSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Stickman stays near helicopter until section is well into view, lands as it scrolls past
      const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / (vh * 0.65)));

      const ty = (ROPE_START - PERSON_TOP) + progress * (LANDING_TOP - ROPE_START);
      const landed = progress > 0.92;

      stickmanRef.current?.setAttribute("transform", `translate(0 ${ty})`);
      upperRopeRef.current?.setAttribute("y2", String(PERSON_ATTACH + ty));
      if (lowerRopeRef.current) {
        lowerRopeRef.current.setAttribute("y1", String(Math.min(PERSON_BOTTOM + ty, LANDING_Y)));
        lowerRopeRef.current.setAttribute("opacity", String(progress > 0.7 ? (progress - 0.7) / 0.3 : 0));
      }
      buildingRef.current && (buildingRef.current.style.stroke = landed ? "#C9A96E" : "");

      // Trigger confetti + staggered lights exactly once on landing
      if (landed && !hasLandedRef.current) {
        hasLandedRef.current = true;
        spawnConfetti();
        lightWindows();
      }
      // Reset if user scrolls back up
      if (!landed && hasLandedRef.current) {
        hasLandedRef.current = false;
        windowRefs.current.forEach((w) => { if (w) w.style.fill = "none"; });
        if (doorRef.current) {
          doorRef.current.style.stroke = "";
          doorRef.current.style.fill = "none";
        }
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

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("advisory.hero.title")}
          </h1>
          <p className="mt-4 font-heading text-4xl font-light text-gold md:text-5xl">
            {t("advisory.hero.subtitle")}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("advisory.hero.description")}
          </p>
        </div>
      </section>

      {/* Consulting — helicopter SWAT team */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div ref={helicopterSectionRef} className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* Helicopter + person dropping into org */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-56">
              <svg className="h-[440px] w-48 text-navy" fill="none" viewBox="0 0 192 440" strokeWidth={1.2} stroke="currentColor">
                {/* Rotor */}
                <line x1="28" y1="22" x2="164" y2="22" strokeWidth={2.5} className="text-gold" />
                <ellipse cx="96" cy="22" rx="4" ry="4" fill="currentColor" className="text-gold" />
                {/* Rotor mast */}
                <line x1="96" y1="22" x2="96" y2="40" strokeWidth={2} />
                {/* Body */}
                <ellipse cx="96" cy="58" rx="36" ry="18" strokeWidth={2} />
                {/* Cockpit window */}
                <path d="M113 51 Q123 58 113 65" strokeWidth={1.5} className="text-gold" />
                {/* Tail */}
                <line x1="60" y1="54" x2="36" y2="45" strokeWidth={2} />
                <line x1="36" y1="45" x2="36" y2="36" strokeWidth={2} />
                <line x1="29" y1="36" x2="43" y2="36" strokeWidth={2} className="text-gold" />
                {/* Landing skids */}
                <line x1="72" y1="74" x2="72" y2="88" strokeWidth={1.5} />
                <line x1="120" y1="74" x2="120" y2="88" strokeWidth={1.5} />
                <line x1="60" y1="88" x2="132" y2="88" strokeWidth={2} />
                {/* Rope from helicopter — grows with scroll */}
                <line ref={upperRopeRef} x1="96" y1="88" x2="96" y2="104" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />
                {/* Person figure — drops with scroll */}
                <g ref={stickmanRef} transform="translate(0 -4)">
                  <circle cx="96" cy="100" r="8" strokeWidth={2} className="text-navy" fill="#FAFAF7" />
                  <line x1="96" y1="108" x2="96" y2="138" strokeWidth={2.2} className="text-navy" />
                  <line x1="96" y1="117" x2="79" y2="129" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="117" x2="113" y2="129" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="138" x2="82" y2="158" strokeWidth={2} className="text-navy" />
                  <line x1="96" y1="138" x2="110" y2="158" strokeWidth={2} className="text-navy" />
                  {/* Briefcase */}
                  <rect x="113" y="123" width="12" height="9" rx="1.5" strokeWidth={1.5} className="text-gold" />
                </g>
                {/* Dashed line from person landing to org */}
                <line ref={lowerRopeRef} x1="96" y1="154" x2="96" y2="316" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" opacity="0" />
                {/* Organization building */}
                <rect
                  ref={buildingRef}
                  x="46"
                  y="320"
                  width="100"
                  height="72"
                  rx="4"
                  strokeWidth={2}
                  className="text-navy"
                  style={{ transition: "stroke 0.4s ease" }}
                />
                <line x1="46" y1="338" x2="146" y2="338" strokeWidth={1} className="text-navy" opacity="0.3" />
                <rect
                  ref={(el) => { windowRefs.current[0] = el; }}
                  x="60"
                  y="347"
                  width="16"
                  height="11"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-gold"
                  fill="none"
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  ref={(el) => { windowRefs.current[1] = el; }}
                  x="88"
                  y="347"
                  width="16"
                  height="11"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-gold"
                  fill="none"
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  ref={(el) => { windowRefs.current[2] = el; }}
                  x="116"
                  y="347"
                  width="16"
                  height="11"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-gold"
                  fill="none"
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  ref={(el) => { windowRefs.current[3] = el; }}
                  x="60"
                  y="368"
                  width="16"
                  height="11"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-gold"
                  fill="none"
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  ref={(el) => { windowRefs.current[4] = el; }}
                  x="88"
                  y="368"
                  width="16"
                  height="11"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-gold"
                  fill="none"
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  ref={doorRef}
                  x="116"
                  y="368"
                  width="16"
                  height="18"
                  rx="1.5"
                  strokeWidth={1.2}
                  className="text-navy"
                  style={{ transition: "all 0.3s ease" }}
                />
                {/* Confetti container — particles spawned by JS on landing */}
                <g ref={confettiRef} />
              </svg>
            </div>
            <div className="flex-1">
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
                    <span>
                      {point as string}
                      {i === 0 && (
                        <>
                          {" ("}
                          <a href="#folder-structure" className="text-navy underline underline-offset-2 transition-colors hover:text-gold">
                            {t("advisory.consulting.exampleLink")}
                          </a>
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

      {/* Connects to your stack */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.tools.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
            {t("advisory.tools.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            {/* Tool logos */}
            <div className="flex flex-wrap justify-center gap-3">
              {advisoryToolLogos.map((tool) => (
                <div
                  key={tool.name}
                  className="flex h-14 w-14 items-center justify-center rounded-lg border border-border-warm bg-white p-2 shadow-sm"
                >
                  <img
                    src={tool.file}
                    alt={tool.name}
                    className="h-8 w-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span class="text-[10px] font-medium text-text-muted text-center leading-tight">${tool.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Arrows: tools ↔ folder */}
            <div className="flex flex-col items-center gap-0">
              <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Folder */}
            <FolderBadge />
            {/* Arrows: folder ↔ desktop apps */}
            <div className="flex flex-col items-center gap-0">
              <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Desktop app cards */}
            <div className="grid w-full max-w-md gap-3 md:grid-cols-2">
              {(tArray("advisory.desktop.cards") as { name: string; description: string }[]).map((card) => (
                <div
                  key={card.name}
                  className="flex flex-col items-center rounded-lg border border-border-warm bg-white p-3"
                >
                  <img
                    src={card.name === "Claude Desktop" ? "/logos/claude_desktop.png" : "/logos/codex_desktop.png"}
                    alt={card.name}
                    className="h-16 w-auto rounded-lg object-contain"
                  />
                  <h3 className="mt-2 text-sm font-semibold text-navy">{card.name}</h3>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-sm text-text-muted">
              {t("advisory.desktop.note")}
            </p>
          </div>
        </div>
      </section>

      {/* What it can do */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.whatItCanDo.title")}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whatItCanDoItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border-warm bg-white p-5 transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Native AI tools disclaimer */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.nativeTools.title")}
          </h2>
          <div className="mt-6 space-y-4">
            {nativeToolsParagraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Every company is different */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("advisory.concept.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {conceptParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-text-muted"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-text-muted">
                {t("advisory.concept.audience")}
              </p>
            </div>
            {/* Interchangeable provider visual */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-64">
              <div className="rounded-xl border border-border-warm bg-white p-6">
                <div className="flex justify-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <img src="/logos/claude.png" alt="Claude" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border-warm bg-off-white p-2">
                    <img src="/logos/openai.png" alt="ChatGPT" className="h-10 w-10 object-contain" />
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
              <p className="mt-3 text-center text-xs text-text-muted">
                {t("advisory.agentVisual.caption")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this setup */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.why.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyItems.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-warm bg-white p-6 transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
              >
                <div className="mb-3">{whyIcons[i]}</div>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Folder structure */}
      <section id="folder-structure" className="scroll-mt-8 bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-light tracking-tight md:text-4xl">
              {t("advisory.folder.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t("advisory.folder.description")}
            </p>
          </div>
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
                    {" — "}
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

      {/* Pricing tiers */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("advisory.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(tArray("advisory.pricing.tiers") as { name: string; description: string; features: string[] }[]).map((tier, i) => {
              const isHighlight = i === 1;
              return (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-lg p-7 ${
                    isHighlight
                      ? "border-2 border-gold bg-navy-light"
                      : "border border-navy/20 bg-navy-light"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{tier.description}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {tier.features.map((feature: string) => (
                      <li key={feature} className="text-sm leading-relaxed text-white/70">
                        <span className="mr-2 text-gold">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:request@zpteam.ai?subject=Advisory inquiry"
                    className={`mt-6 block rounded py-2.5 text-center text-sm font-medium transition-colors ${
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
