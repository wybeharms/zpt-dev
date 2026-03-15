"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

const toolLogos: { name: string; file: string }[] = [
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

export default function TechnologyContent() {
  const { t, tArray } = useI18n();
  const folders = tArray("advisory.folder.folders") as {
    name: string;
    label: string;
    description: string;
  }[];
  const claudeCodePoints = tArray("technology.claudeCode.points") as string[];

  // Collapsible folder structure
  const [folderOpen, setFolderOpen] = useState(false);
  useEffect(() => {
    if (window.location.hash === "#folder-structure") {
      setFolderOpen(true);
    }
    const onHashChange = () => {
      if (window.location.hash === "#folder-structure") setFolderOpen(true);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight md:text-5xl">
            {t("technology.hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("technology.hero.description")}
          </p>
        </div>
      </section>

      {/* What is an AI agent? */}
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

          <p className="mt-4 text-center text-sm italic text-gold">
            {t("home.howItWorks.folderCallout")}
          </p>
          <p className="mt-4 text-center text-sm text-text-muted">
            {t("home.howItWorks.access")}
          </p>
        </div>
      </section>

      {/* Claude Code & Codex */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("technology.claudeCode.title")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {t("technology.claudeCode.description")}
              </p>
              <ul className="mt-6 space-y-3">
                {claudeCodePoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span className="mt-0.5 flex-shrink-0 text-gold">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Desktop app cards */}
            <div className="flex flex-shrink-0 flex-col items-center gap-4 md:w-56">
              {(tArray("advisory.desktop.cards") as { name: string; description: string }[]).map((card) => (
                <div
                  key={card.name}
                  className="flex w-full flex-col items-center rounded-lg border border-border-warm bg-white p-4"
                >
                  <img
                    src={card.name === "Claude Desktop" ? "/logos/claude_desktop.png" : "/logos/codex_desktop.png"}
                    alt={card.name}
                    className="h-16 w-auto rounded-lg object-contain"
                  />
                  <h3 className="mt-2 text-sm font-semibold text-navy">{card.name}</h3>
                </div>
              ))}
              <p className="text-center text-xs text-text-muted">
                {t("advisory.desktop.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Claude Desktop screenshot */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center">
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

      {/* Connects to your stack */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
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
              {toolLogos.map((tool) => (
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
            {/* Arrows: tools -> folder */}
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
          </div>
        </div>
      </section>

      {/* Example folder structure — collapsible */}
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
          <button
            onClick={() => setFolderOpen((o) => !o)}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${folderOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {folderOpen ? t("advisory.folder.collapseLabel") : t("advisory.folder.expandLabel")}
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              folderOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-4 rounded-lg border border-white/10 bg-navy-light p-5 font-logo text-sm">
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
          </div>
        </div>
      </section>
    </>
  );
}
