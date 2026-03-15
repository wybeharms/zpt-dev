"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export default function HomeContent() {
  const { t, tArray } = useI18n();

  // Hero helicopter looping animation
  const heroStickmanRef = useRef<SVGGElement>(null);
  const heroRopeRef = useRef<SVGLineElement>(null);
  const heroFolderRef = useRef<SVGGElement>(null);
  useEffect(() => {
    const SKID_Y = 68;
    const PERSON_HEAD_Y = 86;
    const PERSON_FEET_Y = 132;
    const PERSON_HEIGHT = PERSON_FEET_Y - PERSON_HEAD_Y;
    const BUILDING_TOP_Y = 196;
    const LAND_Y = BUILDING_TOP_Y - PERSON_HEIGHT; // top of head when landed

    // Phase durations in ms
    const DESCENT = 1500;
    const DELIVERY = 3000;
    const ASCENT = 1500;
    const PAUSE = 1000;
    const TOTAL = DESCENT + DELIVERY + ASCENT + PAUSE;

    // Folder line segments (5 strokes that draw sequentially)
    const folderPaths = heroFolderRef.current?.querySelectorAll("line, path");

    let startTime: number | null = null;
    let animId: number;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) % TOTAL;

      const stickman = heroStickmanRef.current;
      const rope = heroRopeRef.current;
      if (!stickman || !rope) { animId = requestAnimationFrame(tick); return; }

      let ty: number;

      if (elapsed < DESCENT) {
        // Phase 1: Descent (ease-out)
        const t = elapsed / DESCENT;
        const ease = 1 - (1 - t) * (1 - t);
        ty = (SKID_Y - PERSON_HEAD_Y) + ease * (LAND_Y - SKID_Y);
        // Hide folder lines
        folderPaths?.forEach((p) => {
          (p as SVGElement).style.strokeDashoffset = (p as SVGElement).getAttribute("data-len") || "0";
          (p as SVGElement).style.opacity = "1";
        });
      } else if (elapsed < DESCENT + DELIVERY) {
        // Phase 2: Delivery — stickman at building, folder assembles
        ty = LAND_Y - PERSON_HEAD_Y;
        const dt = (elapsed - DESCENT) / DELIVERY;
        // 5 segments, each takes 1/5 of delivery time, staggered
        folderPaths?.forEach((p, i) => {
          const segStart = i / 5;
          const segEnd = (i + 1) / 5;
          const segProgress = Math.min(1, Math.max(0, (dt - segStart) / (segEnd - segStart)));
          const len = parseFloat((p as SVGElement).getAttribute("data-len") || "0");
          (p as SVGElement).style.strokeDashoffset = String(len * (1 - segProgress));
          (p as SVGElement).style.opacity = "1";
        });
      } else if (elapsed < DESCENT + DELIVERY + ASCENT) {
        // Phase 3: Ascent (ease-in)
        const t = (elapsed - DESCENT - DELIVERY) / ASCENT;
        const ease = t * t;
        ty = (LAND_Y - PERSON_HEAD_Y) - ease * (LAND_Y - SKID_Y);
        // Folder stays visible
      } else {
        // Phase 4: Pause at top, folder fades out
        ty = SKID_Y - PERSON_HEAD_Y;
        const t = (elapsed - DESCENT - DELIVERY - ASCENT) / PAUSE;
        folderPaths?.forEach((p) => {
          (p as SVGElement).style.opacity = String(1 - t);
        });
      }

      stickman.setAttribute("transform", `translate(0 ${ty})`);
      rope.setAttribute("y2", String(PERSON_HEAD_Y + ty));
      animId = requestAnimationFrame(tick);
    };

    // Init folder line dashoffsets
    setTimeout(() => {
      folderPaths?.forEach((p) => {
        const el = p as SVGElement;
        const len = (p as SVGGeometryElement).getTotalLength?.() || 30;
        el.setAttribute("data-len", String(len));
        el.style.strokeDasharray = String(len);
        el.style.strokeDashoffset = String(len);
      });
      animId = requestAnimationFrame(tick);
    }, 100);

    return () => cancelAnimationFrame(animId);
  }, []);

  // Locale data
  const consultingPoints = tArray("advisory.consulting.points") as string[];
  const nativeToolsParagraphs = tArray("advisory.nativeTools.paragraphs") as string[];
  const useCases = tArray("home.bottleneck.useCases") as {
    title: string;
    description: string;
    why: string;
  }[];
  const servicesItems = tArray("advisory.services.items") as {
    title: string;
    description: string;
  }[];
  const fitItems = tArray("home.proof.fitItems") as string[];
  const expectationItems = tArray("home.expectations.items") as {
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
      ([entry]) => { if (entry.isIntersecting) setSimplifyVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Consulting section helicopter scroll animation (detailed version)
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
      const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / (vh * 0.35)));

      const ty = (ROPE_START - PERSON_TOP) + progress * (LANDING_TOP - ROPE_START);
      const landed = progress > 0.92;

      stickmanRef.current?.setAttribute("transform", `translate(0 ${ty})`);
      upperRopeRef.current?.setAttribute("y2", String(PERSON_ATTACH + ty));
      if (lowerRopeRef.current) {
        lowerRopeRef.current.setAttribute("y1", String(Math.min(PERSON_BOTTOM + ty, LANDING_Y)));
        lowerRopeRef.current.setAttribute("opacity", String(progress > 0.7 ? (progress - 0.7) / 0.3 : 0));
      }
      buildingRef.current && (buildingRef.current.style.stroke = landed ? "#C9A96E" : "");

      if (landed && !hasLandedRef.current) {
        hasLandedRef.current = true;
        spawnConfetti();
        lightWindows();
      }
      if (!landed && hasLandedRef.current) {
        hasLandedRef.current = false;
        windowRefs.current.forEach((w) => { if (w) w.style.fill = "none"; });
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

  // Service card icons
  const serviceIcons = [
    <Image key="educate" src="/screenshots/agentic workflows.png" alt="Agentic workflows presentation" width={200} height={120} className="h-16 w-auto rounded object-cover" />,
    <Image key="claude" src="/logos/claude.png" alt="Claude" width={40} height={40} className="h-10 w-10 object-contain" />,
    <svg key="folder" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>,
    <svg key="plug" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>,
  ];

  return (
    <>
      {/* Section 1: Hero — text left, helicopter right */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-4 font-heading text-3xl font-light text-gold md:text-4xl lg:text-5xl">
              {t("home.hero.subtitle")}
            </p>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/70 md:mx-0">
              {t("home.hero.description")}
            </p>
            <div className="mt-10">
              <a
                href="mailto:request@zpteam.ai?subject=Intro call request"
                className="inline-block rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
              >
                {t("home.hero.cta")}
              </a>
            </div>
          </div>
          {/* Compact helicopter — scroll-animated descent */}
          <div className="hidden flex-shrink-0 md:block md:w-44">
            <svg className="h-[260px] w-full" fill="none" viewBox="0 0 180 260" strokeWidth={1.2} stroke="currentColor">
              {/* Rotor */}
              <line x1="30" y1="18" x2="150" y2="18" strokeWidth={2} className="text-gold/60" />
              <ellipse cx="90" cy="18" rx="3" ry="3" fill="currentColor" className="text-gold/60" />
              {/* Mast */}
              <line x1="90" y1="18" x2="90" y2="32" strokeWidth={1.5} className="text-white/40" />
              {/* Body */}
              <ellipse cx="90" cy="46" rx="30" ry="14" strokeWidth={1.5} className="text-white/40" />
              {/* Cockpit */}
              <path d="M104 40 Q112 46 104 52" strokeWidth={1} className="text-gold/40" />
              {/* Tail */}
              <line x1="60" y1="42" x2="42" y2="35" strokeWidth={1.5} className="text-white/40" />
              <line x1="42" y1="35" x2="42" y2="28" strokeWidth={1.5} className="text-white/40" />
              <line x1="36" y1="28" x2="48" y2="28" strokeWidth={1.5} className="text-gold/40" />
              {/* Skids */}
              <line x1="70" y1="58" x2="70" y2="68" strokeWidth={1} className="text-white/30" />
              <line x1="110" y1="58" x2="110" y2="68" strokeWidth={1} className="text-white/30" />
              <line x1="60" y1="68" x2="120" y2="68" strokeWidth={1.5} className="text-white/30" />
              {/* Rope — y2 animated by JS */}
              <line ref={heroRopeRef} x1="90" y1="68" x2="90" y2="86" strokeWidth={1} strokeDasharray="3 3" className="text-gold/40" />
              {/* Person — transform animated by JS */}
              <g ref={heroStickmanRef}>
                <circle cx="90" cy="86" r="6" strokeWidth={1.5} className="text-white/60" fill="none" />
                <line x1="90" y1="92" x2="90" y2="116" strokeWidth={1.5} className="text-white/60" />
                <line x1="90" y1="100" x2="77" y2="110" strokeWidth={1.5} className="text-white/60" />
                <line x1="90" y1="100" x2="103" y2="110" strokeWidth={1.5} className="text-white/60" />
                <line x1="90" y1="116" x2="79" y2="132" strokeWidth={1.5} className="text-white/60" />
                <line x1="90" y1="116" x2="101" y2="132" strokeWidth={1.5} className="text-white/60" />
                {/* Briefcase */}
                <rect x="103" y="105" width="9" height="7" rx="1" strokeWidth={1} className="text-gold/50" />
              </g>
              {/* Building — compact, no windows */}
              <rect x="48" y="196" width="84" height="48" rx="3" strokeWidth={1.5} className="text-white/30" />
              {/* Folder construction lines — drawn sequentially during delivery */}
              <g ref={heroFolderRef}>
                {/* Bottom edge */}
                <line x1="72" y1="232" x2="108" y2="232" strokeWidth={1.8} stroke="#C9A96E" />
                {/* Left side */}
                <line x1="72" y1="232" x2="72" y2="212" strokeWidth={1.8} stroke="#C9A96E" />
                {/* Right side */}
                <line x1="108" y1="232" x2="108" y2="212" strokeWidth={1.8} stroke="#C9A96E" />
                {/* Top edge */}
                <line x1="72" y1="212" x2="108" y2="212" strokeWidth={1.8} stroke="#C9A96E" />
                {/* Folder tab */}
                <path d="M72 212 L72 208 L85 208 L88 212" strokeWidth={1.8} stroke="#C9A96E" fill="none" />
              </g>
            </svg>
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

      {/* Section 2: The Problem */}
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

          {/* News screenshot collage */}
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

      {/* Section 3: How Advisory Works — Detailed Helicopter */}
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
                {/* Rope from helicopter */}
                <line ref={upperRopeRef} x1="96" y1="88" x2="96" y2="104" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />
                {/* Person figure */}
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
                {/* Dashed line from person to org */}
                <line ref={lowerRopeRef} x1="96" y1="154" x2="96" y2="296" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" opacity="0" />
                {/* Organization building */}
                <rect ref={buildingRef} x="46" y="300" width="100" height="72" rx="4" strokeWidth={2} className="text-navy" style={{ transition: "stroke 0.4s ease" }} />
                <line x1="46" y1="318" x2="146" y2="318" strokeWidth={1} className="text-navy" opacity="0.3" />
                <rect ref={(el) => { windowRefs.current[0] = el; }} x="60" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[1] = el; }} x="88" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[2] = el; }} x="116" y="327" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[3] = el; }} x="60" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[4] = el; }} x="88" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                <rect ref={(el) => { windowRefs.current[5] = el; }} x="116" y="348" width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                {/* Confetti container */}
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
                      {i === 1 && (
                        <>
                          {" ("}
                          <Link href="/technology#folder-structure" className="text-navy underline underline-offset-2 transition-colors hover:text-gold">
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

      {/* Section 4: Native Tools Objection */}
      <section className="bg-cream px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("advisory.nativeTools.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {nativeToolsParagraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-text-muted" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            {/* Interchangeable provider visual */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-52">
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What ZPT Can Do For Your Team */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Services overview */}
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.services.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("advisory.services.subtitle")}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicesItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-lg border border-border-warm bg-white p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="mb-3">{serviceIcons[i]}</div>
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Use case cards */}
          <h3 className="mt-16 text-center font-heading text-2xl font-light tracking-tight text-navy md:text-3xl">
            {t("home.bottleneck.title")}
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="group relative h-[180px] overflow-hidden rounded-lg border border-border-warm bg-white p-5"
              >
                <h3 className="text-base font-semibold text-navy">{uc.title}</h3>
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

      {/* Section 6: Good Fit + Proof */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("home.proof.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/60">
            {t("home.proof.description")}
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center">
            <h3 className="text-center text-lg font-semibold text-gold">
              {t("home.proof.fitTitle")}
            </h3>
            <ul className="mt-6 space-y-3">
              {fitItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm leading-relaxed text-white/70">
                  <svg className="h-4 w-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: What We Expect From You */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("home.expectations.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {expectationItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-border-warm bg-white p-6 text-center">
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Pricing */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-text-muted">
            {t("advisory.pricing.subtitle")}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(tArray("advisory.pricing.tiers") as { name: string; time: string; description: string }[]).map((tier, i) => {
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
                  <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-2 text-sm font-medium text-gold">{tier.time}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{tier.description}</p>
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

      {/* Section 9: CTA */}
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
