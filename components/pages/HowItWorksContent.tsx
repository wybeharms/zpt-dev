"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

/* ── Workflow comparison data ─────────────────────────────── */

type ManualStep = { step: string; time: string };
type ZptStep = { step: string; type: "agent" | "human" };

const workflowExamples: {
  title: string;
  lead: string;
  outputLabel: string;
  outputLogo: string;
  manualStart: ManualStep[];
  manualMore: number;
  manualEnd: ManualStep[];
  manualTotal: string;
  zpt: ZptStep[];
  zptTotal: string;
}[] = [
  {
    title: "Quarterly Fund Analysis",
    lead: "Analyzing quarterly cash flows across multiple fund portfolios.",
    outputLabel: "Excel",
    outputLogo: "/logos/excel.png",
    manualStart: [
      { step: "Log into custodian portal and download reports", time: "30 min" },
      { step: "Open each PDF, locate relevant tables", time: "45 min" },
      { step: "Manually type figures into spreadsheet", time: "1.5 h" },
    ],
    manualMore: 5,
    manualEnd: [
      { step: "Create updated Excel model", time: "2 h" },
      { step: "Final review and sign-off", time: "1 h" },
    ],
    manualTotal: "~10 hours",
    zpt: [
      { step: "Reads all quarterly PDFs and extracts figures", type: "agent" },
      { step: "Cross-references and flags discrepancies", type: "agent" },
      { step: "Analyst verifies flagged items", type: "human" },
      { step: "Creates updated Excel model", type: "agent" },
    ],
    zptTotal: "~1 hour",
  },
  {
    title: "Due Diligence Deck",
    lead: "From data room to investment committee presentation.",
    outputLabel: "PowerPoint",
    outputLogo: "/logos/powerpoint.png",
    manualStart: [
      { step: "Receive and organize data room documents", time: "1 h" },
      { step: "Read and categorize each document (20+)", time: "6 h" },
      { step: "Extract data points into structured format", time: "4 h" },
    ],
    manualMore: 6,
    manualEnd: [
      { step: "Internal review and iteration", time: "4 h" },
      { step: "Final polish and formatting", time: "2 h" },
    ],
    manualTotal: "~2 weeks",
    zpt: [
      { step: "Reads and categorizes all data room documents", type: "agent" },
      { step: "Produces ~80% draft of analysis sections", type: "agent" },
      { step: "Analyst reviews, adds investment judgment", type: "human" },
      { step: "Builds PowerPoint deck from analysis", type: "agent" },
    ],
    zptTotal: "~2-3 days",
  },
  {
    title: "Client Onboarding",
    lead: "Processing intake documents and populating internal systems.",
    outputLabel: "CRM",
    outputLogo: "",
    manualStart: [
      { step: "Receive contracts and intake forms via email", time: "10 min" },
      { step: "Open and read each document for key fields", time: "30 min" },
      { step: "Log into CRM and manually enter data", time: "25 min" },
    ],
    manualMore: 4,
    manualEnd: [
      { step: "Flag missing information", time: "10 min" },
      { step: "Draft follow-up email to client", time: "15 min" },
    ],
    manualTotal: "~2.5 hours",
    zpt: [
      { step: "Reads all intake documents and extracts fields", type: "agent" },
      { step: "Populates CRM records, flags gaps", type: "agent" },
      { step: "Human reviews summary and sends follow-up", type: "human" },
    ],
    zptTotal: "~20 minutes",
  },
];

/* ── Component ────────────────────────────────────────────── */

export default function HowItWorksContent() {
  const { t, tArray } = useI18n();

  const consultingPoints = tArray("advisory.consulting.points") as string[];
  const nativeToolsParagraphs = tArray("advisory.nativeTools.paragraphs") as string[];

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
    const ROPE_START = 88, PERSON_TOP = 92, PERSON_BOTTOM = 158, PERSON_ATTACH = 108, LANDING_Y = 290;
    const LANDING_TOP = LANDING_Y - (PERSON_BOTTOM - PERSON_TOP);
    const spawnConfetti = () => {
      const g = confettiRef.current; if (!g) return;
      const cx = 96, cy = LANDING_Y + 15;
      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.4;
        const speed = 40 + Math.random() * 50, size = 2 + Math.random() * 3;
        const el = document.createElementNS("http://www.w3.org/2000/svg", Math.random() > 0.5 ? "circle" : "rect");
        if (el.tagName === "circle") el.setAttribute("r", String(size));
        else { el.setAttribute("width", String(size * 1.5)); el.setAttribute("height", String(size * 1.5)); el.setAttribute("rx", "1"); }
        el.setAttribute("fill", i % 3 === 0 ? "#C9A96E" : i % 3 === 1 ? "#E8D5A8" : "#0C0C28");
        el.setAttribute("opacity", "1"); g.appendChild(el);
        const dx = Math.cos(angle) * speed, dy = Math.sin(angle) * speed - 20;
        let frame = 0; const totalFrames = 35 + Math.floor(Math.random() * 15);
        const animate = () => {
          frame++; const t = frame / totalFrames, ease = 1 - (1 - t) * (1 - t);
          const x = cx + dx * ease, y = cy + dy * ease + 30 * t * t;
          if (el.tagName === "circle") { el.setAttribute("cx", String(x)); el.setAttribute("cy", String(y)); }
          else { el.setAttribute("x", String(x)); el.setAttribute("y", String(y)); }
          el.setAttribute("opacity", String(Math.max(0, 1 - t)));
          if (frame < totalFrames) requestAnimationFrame(animate); else el.remove();
        };
        requestAnimationFrame(animate);
      }
    };
    const lightWindows = () => { windowRefs.current.forEach((w, i) => { if (!w) return; setTimeout(() => { w.style.fill = "rgba(201,169,110,0.35)"; }, i * 90); }); };
    const update = () => {
      const el = helicopterSectionRef.current; if (!el) return;
      const rect = el.getBoundingClientRect(), vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / (vh * 0.35)));
      const ty = ROPE_START - PERSON_TOP + progress * (LANDING_TOP - ROPE_START), landed = progress > 0.92;
      stickmanRef.current?.setAttribute("transform", `translate(0 ${ty})`);
      upperRopeRef.current?.setAttribute("y2", String(PERSON_ATTACH + ty));
      if (lowerRopeRef.current) { lowerRopeRef.current.setAttribute("y1", String(Math.min(PERSON_BOTTOM + ty, LANDING_Y))); lowerRopeRef.current.setAttribute("opacity", String(progress > 0.7 ? (progress - 0.7) / 0.3 : 0)); }
      if (buildingRef.current) buildingRef.current.style.stroke = landed ? "#C9A96E" : "";
      if (landed && !hasLandedRef.current) { hasLandedRef.current = true; spawnConfetti(); lightWindows(); }
      if (!landed && hasLandedRef.current) { hasLandedRef.current = false; windowRefs.current.forEach((w) => { if (w) w.style.fill = "none"; }); }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  // Workflow card entrance
  const workflowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleWorkflows, setVisibleWorkflows] = useState<boolean[]>(workflowExamples.map(() => false));
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    workflowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setVisibleWorkflows((prev) => { const next = [...prev]; next[i] = true; return next; });
      }, { threshold: 0.1 });
      obs.observe(el); observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">{t("howItWorks.hero.title")}</h1>
          <p className="mt-4 text-white/70">{t("howItWorks.hero.subtitle")}</p>
        </div>
      </section>

      {/* Section 1: Helicopter Animation + Consulting Steps */}
      <section className="bg-off-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div ref={helicopterSectionRef} className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex flex-shrink-0 flex-col items-center md:w-56">
              <svg className="h-[440px] w-48 text-navy" fill="none" viewBox="0 0 192 440" strokeWidth={1.2} stroke="currentColor">
                <line x1="28" y1="22" x2="164" y2="22" strokeWidth={2.5} className="text-gold" />
                <ellipse cx="96" cy="22" rx="4" ry="4" fill="currentColor" className="text-gold" />
                <line x1="96" y1="22" x2="96" y2="40" strokeWidth={2} />
                <ellipse cx="96" cy="58" rx="36" ry="18" strokeWidth={2} />
                <path d="M113 51 Q123 58 113 65" strokeWidth={1.5} className="text-gold" />
                <line x1="60" y1="54" x2="36" y2="45" strokeWidth={2} /><line x1="36" y1="45" x2="36" y2="36" strokeWidth={2} /><line x1="29" y1="36" x2="43" y2="36" strokeWidth={2} className="text-gold" />
                <line x1="72" y1="74" x2="72" y2="88" strokeWidth={1.5} /><line x1="120" y1="74" x2="120" y2="88" strokeWidth={1.5} /><line x1="60" y1="88" x2="132" y2="88" strokeWidth={2} />
                <line ref={upperRopeRef} x1="96" y1="88" x2="96" y2="104" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />
                <g ref={stickmanRef} transform="translate(0 -4)">
                  <circle cx="96" cy="100" r="8" strokeWidth={2} fill="#FAFAF7" /><line x1="96" y1="108" x2="96" y2="138" strokeWidth={2.2} /><line x1="96" y1="117" x2="79" y2="129" strokeWidth={2} /><line x1="96" y1="117" x2="113" y2="129" strokeWidth={2} /><line x1="96" y1="138" x2="82" y2="158" strokeWidth={2} /><line x1="96" y1="138" x2="110" y2="158" strokeWidth={2} />
                  <rect x="113" y="123" width="12" height="9" rx="1.5" strokeWidth={1.5} className="text-gold" />
                </g>
                <line ref={lowerRopeRef} x1="96" y1="154" x2="96" y2="296" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" opacity="0" />
                <rect ref={buildingRef} x="46" y="300" width="100" height="72" rx="4" strokeWidth={2} style={{ transition: "stroke 0.4s ease" }} />
                <line x1="46" y1="318" x2="146" y2="318" strokeWidth={1} opacity="0.3" />
                {[0,1,2,3,4,5].map((i) => (
                  <rect key={i} ref={(el) => { windowRefs.current[i] = el; }} x={60 + (i % 3) * 28} y={327 + Math.floor(i / 3) * 21} width="16" height="11" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" style={{ transition: "fill 0.3s ease" }} />
                ))}
                <g ref={confettiRef} />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">{t("advisory.consulting.title")}</h2>
              <p className="mt-3 text-text-muted">{t("advisory.consulting.description")}</p>
              <ul className="mt-6 space-y-5">
                {consultingPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span className="mt-0.5 flex-shrink-0 text-gold">+</span>
                    <span>{point as string}{i === 1 && (<>{" ("}<Link href="/technology#folder-structure" className="text-navy underline underline-offset-2 transition-colors hover:text-gold">{t("advisory.consulting.exampleLink")}</Link>{")"}</>)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-block rounded-lg border border-gold/30 bg-gold/10 px-5 py-3">
                <p className="text-sm font-semibold text-navy">{t("advisory.consulting.callout")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Workflow Comparisons */}
      <section className="bg-cream px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-light tracking-tight text-navy md:text-3xl">
            What This Looks Like in Practice
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
            Real workflows, real time savings.
          </p>

          <div className="mt-14 space-y-14">
            {workflowExamples.map((wf, wi) => {
              const startNum = wf.manualStart.length;
              const totalSteps = startNum + wf.manualMore + wf.manualEnd.length;
              const endStartNum = totalSteps - wf.manualEnd.length + 1;

              return (
                <div
                  key={wf.title}
                  ref={(el) => { workflowRefs.current[wi] = el; }}
                  className={`overflow-hidden rounded-xl border border-border-warm bg-white shadow-sm transition-all duration-700 ${
                    visibleWorkflows[wi] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: visibleWorkflows[wi] ? `${wi * 150}ms` : "0ms" }}
                >
                  {/* Card header: title left, output badge right */}
                  <div className="flex items-start justify-between px-6 pt-7 md:px-8 md:pt-8">
                    <div>
                      <h3 className="font-logo text-base font-semibold text-navy">{wf.title}</h3>
                      <p className="mt-1 text-sm text-text-muted">{wf.lead}</p>
                    </div>
                    <div className="ml-4 flex shrink-0 items-center gap-2 rounded-lg border border-gold/25 bg-gold/[0.06] px-3 py-2">
                      {wf.outputLogo ? (
                        <Image src={wf.outputLogo} alt={wf.outputLabel} width={18} height={18} className="h-[18px] w-[18px]" />
                      ) : (
                        <svg className="h-[18px] w-[18px] text-navy/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                      )}
                      <span className="text-xs font-medium text-navy/60">{wf.outputLabel}</span>
                    </div>
                  </div>

                  {/* Two-panel comparison */}
                  <div className="mt-6 grid md:grid-cols-2">
                    {/* LEFT: Manual process */}
                    <div className="border-b border-border-warm bg-white px-6 pb-6 pt-5 md:border-b-0 md:border-r md:px-8 md:pb-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                        Manual process
                      </p>
                      <ul className="mt-4 space-y-0">
                        {/* First steps */}
                        {wf.manualStart.map((s, i) => (
                          <li key={i} className="flex items-baseline gap-3 border-b border-border-warm/40 py-2.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-[10px] font-medium text-navy/30">
                              {i + 1}
                            </span>
                            <span className="flex-1 text-[13px] leading-snug text-text-muted">{s.step}</span>
                            <span className="shrink-0 font-mono text-[11px] text-navy/25">{s.time}</span>
                          </li>
                        ))}
                        {/* "And more" row */}
                        {wf.manualMore > 0 && (
                          <li className="flex items-baseline gap-3 border-b border-border-warm/40 py-2.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[11px] text-navy/20">⋯</span>
                            <span className="text-[12px] italic text-navy/25">and {wf.manualMore} more steps</span>
                          </li>
                        )}
                        {/* Last steps */}
                        {wf.manualEnd.map((s, i) => (
                          <li key={`end-${i}`} className="flex items-baseline gap-3 border-b border-border-warm/40 py-2.5 last:border-b-0">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-[10px] font-medium text-navy/30">
                              {endStartNum + i}
                            </span>
                            <span className="flex-1 text-[13px] leading-snug text-text-muted">{s.step}</span>
                            <span className="shrink-0 font-mono text-[11px] text-navy/25">{s.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT: With agents */}
                    <div className="bg-gold/[0.08] px-6 pb-6 pt-5 md:px-8 md:pb-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                        With agents
                      </p>
                      <ul className="mt-4 space-y-0">
                        {wf.zpt.map((s, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 border-b border-gold/10 py-3 last:border-b-0 ${
                              s.type === "human" ? "font-medium text-navy" : "text-navy/70"
                            }`}
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                                s.type === "human"
                                  ? "bg-navy/10 text-navy"
                                  : "bg-gold/25 text-gold-dark"
                              }`}
                            >
                              {s.type === "human" ? "✓" : "→"}
                            </span>
                            <span className="text-[13px] leading-snug">{s.step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: time comparison centered under each column */}
                  <div className="grid border-t border-border-warm md:grid-cols-2">
                    <div className="flex items-center justify-center border-b border-border-warm bg-off-white/40 px-6 py-5 md:border-b-0 md:border-r">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-navy">{wf.manualTotal}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-navy/30">manual</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-gold/[0.06] px-6 py-5">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gold">{wf.zptTotal}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-gold/50">with agents</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Native Tools Objection */}
      <section className="bg-off-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">{t("advisory.nativeTools.title")}</h2>
              <div className="mt-6 space-y-4">
                {nativeToolsParagraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-text-muted" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
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
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                  <span>{t("advisory.agentVisual.interchangeable")}</span>
                </div>
                <div className="my-3 flex flex-col items-center">
                  <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  <svg className="h-4 w-4 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gold bg-navy p-2">
                    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-text-muted">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                  <span>{t("advisory.agentVisual.yourFolder")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Before We Start */}
      <section className="bg-cream px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">{t("home.expectations.title")}</h2>
          <ul className="mt-10 space-y-7 pl-4 md:pl-12">
            {(tArray("home.expectations.items") as { title: string; description: string }[]).map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: Engagement Types */}
      <section className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">{t("advisory.pricing.title")}</h2>
          <p className="mt-3 text-center text-white/60">{t("advisory.pricing.subtitle")}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {(tArray("advisory.pricing.tiers") as { name: string; time: string; description: string }[]).map((tier) => (
              <div key={tier.name} className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-xs font-medium text-gold">{tier.time}</p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-white/50">{tier.description}</p>
                <a href="mailto:request@zpteam.ai?subject=Advisory inquiry" className="mt-6 block w-full font-logo rounded-lg border border-white/20 py-2.5 text-center text-xs font-medium text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy">
                  {t("advisory.pricing.cta")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">{t("advisory.cta.title")}</h2>
          <a href="mailto:request@zpteam.ai?subject=Intro call request" className="mt-6 inline-block font-logo rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light">
            {t("advisory.cta.button")}
          </a>
          <p className="mt-3 text-sm text-text-muted">
            {t("advisory.cta.email")}{" "}
            <a href="mailto:request@zpteam.ai" className="text-slate-blue underline underline-offset-2 transition-colors hover:text-navy">request@zpteam.ai</a>
          </p>
        </div>
      </section>
    </>
  );
}
