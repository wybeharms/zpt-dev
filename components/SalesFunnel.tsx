"use client";

import { useI18n } from "./I18nProvider";

/* Clip-path percentages for each narrowing stage */
const stageClips = [
  "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)",
  "polygon(8% 0%, 92% 0%, 84% 100%, 16% 100%)",
  "polygon(16% 0%, 84% 0%, 76% 100%, 24% 100%)",
  "polygon(24% 0%, 76% 0%, 68% 100%, 32% 100%)",
];

/* Simple robot agent SVG icon */
function AgentIcon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        {/* Dotted lines radiating outward */}
        <svg className="absolute -left-3 -top-3 h-[52px] w-[52px]" viewBox="0 0 52 52" fill="none">
          <line x1="26" y1="4" x2="26" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gold/40" />
          <line x1="46" y1="10" x2="50" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gold/40" />
          <line x1="48" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gold/40" />
          <line x1="6" y1="10" x2="2" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gold/40" />
          <line x1="4" y1="26" x2="0" y2="26" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gold/40" />
        </svg>
        {/* Robot body */}
        <svg className="relative z-10 h-[28px] w-[28px] text-navy" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="2" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="2" r="1.5" fill="currentColor" className="text-gold" />
          <rect x="6" y="6" width="16" height="12" rx="3" fill="currentColor" />
          <circle cx="10.5" cy="12" r="1.5" fill="white" />
          <circle cx="17.5" cy="12" r="1.5" fill="white" />
          <rect x="9" y="19" width="10" height="6" rx="2" fill="currentColor" opacity="0.7" />
          <line x1="6" y1="20" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="20" x2="25" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-[11px] font-medium text-navy/70">{label}</span>
    </div>
  );
}

export default function SalesFunnel() {
  const { tArray } = useI18n();
  const sources = tArray("sales.funnel.sources") as string[];
  const stages = tArray("sales.funnel.stages") as {
    title: string;
    description: string;
  }[];

  return (
    <div className="mt-10 mx-auto max-w-4xl">
      {/* Two-column layout: funnel left, descriptions right */}
      <div className="grid gap-x-8 md:grid-cols-[380px_1fr]">
        {/* Left column: agents + funnel */}
        <div>
          {/* Source agent icons - above the funnel */}
          <div className="flex flex-wrap justify-center gap-5">
            {sources.map((source) =>
              source === "..." ? (
                <div key={source} className="flex flex-col items-center justify-end gap-1.5">
                  <span className="text-lg font-semibold text-navy/40">...</span>
                </div>
              ) : (
                <AgentIcon key={source} label={source} />
              )
            )}
          </div>

          {/* Arrow from sources to funnel */}
          <div className="my-3 flex justify-center">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Funnel stages */}
          <div className="space-y-2">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="flex items-center justify-center py-7"
                style={{
                  background: "var(--color-navy)",
                  clipPath: stageClips[i],
                }}
              >
                <h3 className="text-center text-sm font-semibold text-white md:text-base">
                  {stage.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: descriptions aligned to each stage */}
        <div className="hidden md:flex md:flex-col">
          {/* Spacer for agents + arrow height */}
          <div className="h-[88px]" />

          {/* Descriptions matching funnel stage rhythm */}
          <div className="space-y-2">
            {stages.map((stage, i) => (
              <div key={i} className="flex items-center py-7">
                <p className="text-sm leading-relaxed text-text-muted">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: descriptions below funnel */}
      <div className="mt-6 space-y-4 md:hidden">
        {stages.map((stage, i) => (
          <div key={i}>
            <h4 className="text-sm font-semibold text-navy">{stage.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
