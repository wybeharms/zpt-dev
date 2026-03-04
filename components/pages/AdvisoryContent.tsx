"use client";

import { useI18n } from "@/components/I18nProvider";

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

/* Folder icon used as ZPT badge in tool logos */
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
  const whyItems = tArray("advisory.why.items") as {
    title: string;
    description: string;
  }[];
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
            <br />
            <span className="text-gold">{t("advisory.hero.subtitle")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {t("advisory.hero.description")}
          </p>
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

      {/* Connects to your stack */}
      <section className="bg-off-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
            {t("advisory.tools.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
            {t("advisory.tools.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
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
            <div className="flex flex-col items-center gap-0">
              <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <FolderBadge />
          </div>
        </div>
      </section>

      {/* Core concept + Agent visual (merged) */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            {/* Left: text */}
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
                {t("advisory.concept.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {conceptParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-text-muted"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {t("advisory.agentVisual.teamNote")}
              </p>
            </div>

            {/* Right: visual */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-80">
              <div className="w-full rounded-lg border border-border-warm bg-white p-8 md:p-10">
                <div className="flex flex-col items-center gap-6">
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
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                      <span className="text-[11px] font-medium">Interchangeable</span>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="flex flex-col items-center">
                    <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Local folder */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-gold bg-navy p-3">
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
              <p className="mt-3 text-center text-xs text-text-muted">
                {t("advisory.agentVisual.caption")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Folder structure */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
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

      {/* Consulting */}
      <section className="bg-cream px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* Helicopter + person dropping into org */}
            <div className="flex flex-shrink-0 flex-col items-center md:w-56">
              <svg className="h-80 w-44 text-navy" fill="none" viewBox="0 0 176 320" strokeWidth={1.2} stroke="currentColor">
                {/* Rotor */}
                <line x1="28" y1="22" x2="148" y2="22" strokeWidth={2.5} className="text-gold" />
                <ellipse cx="88" cy="22" rx="4" ry="4" fill="currentColor" className="text-gold" />
                {/* Rotor mast */}
                <line x1="88" y1="22" x2="88" y2="38" strokeWidth={2} />
                {/* Body */}
                <ellipse cx="88" cy="54" rx="32" ry="16" strokeWidth={2} />
                {/* Cockpit window */}
                <path d="M103 48 Q112 54 103 60" strokeWidth={1.5} className="text-gold" />
                {/* Tail */}
                <line x1="56" y1="50" x2="34" y2="42" strokeWidth={2} />
                <line x1="34" y1="42" x2="34" y2="34" strokeWidth={2} />
                <line x1="28" y1="34" x2="40" y2="34" strokeWidth={2} className="text-gold" />
                {/* Landing skids */}
                <line x1="68" y1="68" x2="68" y2="80" strokeWidth={1.5} />
                <line x1="108" y1="68" x2="108" y2="80" strokeWidth={1.5} />
                <line x1="58" y1="80" x2="118" y2="80" strokeWidth={2} />

                {/* Rope from helicopter */}
                <line x1="88" y1="80" x2="88" y2="120" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />

                {/* Person figure */}
                <circle cx="88" cy="128" r="7" strokeWidth={2} className="text-navy" />
                <line x1="88" y1="135" x2="88" y2="162" strokeWidth={2.2} className="text-navy" />
                <line x1="88" y1="143" x2="73" y2="153" strokeWidth={2} className="text-navy" />
                <line x1="88" y1="143" x2="103" y2="153" strokeWidth={2} className="text-navy" />
                <line x1="88" y1="162" x2="76" y2="180" strokeWidth={2} className="text-navy" />
                <line x1="88" y1="162" x2="100" y2="180" strokeWidth={2} className="text-navy" />
                {/* Briefcase */}
                <rect x="103" y="148" width="11" height="8" rx="1.5" strokeWidth={1.5} className="text-gold" />

                {/* Dashed line from person to org */}
                <line x1="88" y1="180" x2="88" y2="210" strokeWidth={1.5} strokeDasharray="4 4" className="text-gold" />

                {/* Organization building */}
                <rect x="42" y="214" width="92" height="64" rx="4" strokeWidth={2} className="text-navy" />
                {/* Roof line */}
                <line x1="42" y1="230" x2="134" y2="230" strokeWidth={1} className="text-navy" opacity="0.3" />
                {/* Windows row 1 */}
                <rect x="54" y="238" width="14" height="10" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" />
                <rect x="81" y="238" width="14" height="10" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" />
                <rect x="108" y="238" width="14" height="10" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" />
                {/* Windows row 2 */}
                <rect x="54" y="258" width="14" height="10" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" />
                <rect x="81" y="258" width="14" height="10" rx="1.5" strokeWidth={1.2} className="text-gold" fill="none" />
                {/* Door */}
                <rect x="108" y="258" width="14" height="16" rx="1.5" strokeWidth={1.2} className="text-navy" />
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
                    {point as string}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-navy px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
            {t("advisory.pricing.title")}
          </h2>
          <p className="mt-3 text-center text-white/60">
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
