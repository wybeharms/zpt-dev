import type { ReactNode } from "react";
import ExampleDocsFan from "../../components/ExampleDocsFan";
import RevealOnScroll from "../../components/RevealOnScroll";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import WorkflowCard from "./WorkflowCard";

/**
 * "A Few Examples." One featured example with the documents it produces,
 * then three compact ones. The examples are anonymized: each card is
 * tagged with the tools it runs on, never with a sector, because a
 * sector next to the Trusted By logo wall points at a client. Results
 * are stated without numbers for the same reason.
 */

/* ---------- Flow glyphs for the compact cards ---------- */
/* Same drawing rules as MarineIcons: 32x32 viewBox, single 1.5 stroke,
 * currentColor. They show what goes in and what comes out. */

const glyphProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const INPUT = "h-7 w-7 text-navy/45";
const OUTPUT = "h-7 w-7 text-cognac";

function PageGlyph({ className }: { className: string }) {
  return (
    <svg {...glyphProps} className={className}>
      <path d="M8 4 H19 L25 10 V28 H8 Z" />
      <path d="M19 4 V10 H25" />
      <line x1="12" y1="17" x2="21" y2="17" />
      <line x1="12" y1="22" x2="21" y2="22" />
    </svg>
  );
}

function MailGlyph({ className }: { className: string }) {
  return (
    <svg {...glyphProps} className={className}>
      <rect x="4" y="7" width="24" height="18" rx="1.5" />
      <path d="M4.5 9 L16 17.5 L27.5 9" />
    </svg>
  );
}

function PersonGlyph({ className }: { className: string }) {
  return (
    <svg {...glyphProps} className={className}>
      <circle cx="16" cy="11" r="5" />
      <path d="M6 27 A 10 9 0 0 1 26 27" />
    </svg>
  );
}

function TableGlyph({ className }: { className: string }) {
  return (
    <svg {...glyphProps} className={className}>
      <rect x="4" y="6" width="24" height="20" rx="1.5" />
      <line x1="4" y1="12.5" x2="28" y2="12.5" />
      <line x1="4" y1="19" x2="28" y2="19" />
      <line x1="13" y1="6" x2="13" y2="26" />
    </svg>
  );
}

function DashboardGlyph({ className }: { className: string }) {
  return (
    <svg {...glyphProps} className={className}>
      <rect x="4" y="5" width="11" height="13" rx="1" />
      <rect x="19" y="5" width="9" height="7" rx="1" />
      <rect x="19" y="16" width="9" height="11" rx="1" />
      <rect x="4" y="22" width="11" height="5" rx="1" />
    </svg>
  );
}

function ArrowGlyph() {
  return (
    <svg {...glyphProps} className="mx-0.5 h-4 w-4 text-cognac/70">
      <line x1="5" y1="16" x2="27" y2="16" />
      <path d="M19 8 L27 16 L19 24" />
    </svg>
  );
}

/* ---------- Content ---------- */

const FEATURED = {
  tag: "Word · Excel · PowerPoint",
  title: "Speeding Up Due Diligence",
  rows: [
    ["The Problem", "Screening a new fund took weeks of manual work."],
    [
      "What We Did",
      "Agents draft the memo, the model, and the deck in the firm's own format.",
    ],
    ["The Result", "A first pass in hours. More funds reviewed."],
  ],
};

type Example = {
  flow: ReactNode;
  tag: string;
  title: string;
  result: string;
};

const EXAMPLES: Example[] = [
  {
    flow: (
      <>
        <PageGlyph className={INPUT} />
        <PageGlyph className={INPUT} />
        <ArrowGlyph />
        <TableGlyph className={OUTPUT} />
      </>
    ),
    tag: "PDF Statements",
    title: "From PDF Statements To Clean Data",
    result: "Analysts review instead of retyping.",
  },
  {
    flow: (
      <>
        <PersonGlyph className={INPUT} />
        <MailGlyph className={INPUT} />
        <ArrowGlyph />
        <DashboardGlyph className={OUTPUT} />
      </>
    ),
    tag: "HubSpot · Outlook",
    title: "Personalized Dashboard And CRM",
    result: "One clear view of every relationship, each morning.",
  },
  {
    flow: (
      <>
        <MailGlyph className={INPUT} />
        <ArrowGlyph />
        <TableGlyph className={OUTPUT} />
      </>
    ),
    tag: "Gmail · Google Sheets",
    title: "Tracking Supplier Updates",
    result: "The tracker updates itself. The team reviews flags.",
  },
];

const TAG =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-cognac/85";

export default function ExampleWorkflows() {
  return (
    <Section
      id="example-workflows"
      bg="cream"
      align="header"
      backgroundWord="Cases"
      compact
    >
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Workflows We&apos;ve Shipped</SectionEyebrow>
        <SectionHeading bg="cream">A Few Examples.</SectionHeading>
      </div>

      <div className="mt-10">
        <RevealOnScroll>
          <WorkflowCard>
            <div className="grid items-center gap-8 p-6 md:px-8 md:py-7 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-10">
              <ExampleDocsFan className="pb-[0.6em] text-[7.5px] sm:text-[11px]" />
              <div>
                <p className={TAG}>{FEATURED.tag}</p>
                <h3 className="mt-2 font-serif text-[26px] leading-snug text-navy md:text-[28px]">
                  {FEATURED.title}
                </h3>
                <dl className="mt-4 space-y-2.5">
                  {FEATURED.rows.map(([label, line]) => (
                    <div
                      key={label}
                      className="grid gap-x-5 gap-y-0.5 sm:grid-cols-[104px_minmax(0,1fr)]"
                    >
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-navy/50 sm:pt-[4px]">
                        {label}
                      </dt>
                      <dd className="text-[14.5px] leading-[1.55] text-navy/80">
                        {line}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </WorkflowCard>
        </RevealOnScroll>
      </div>

      <ul className="mt-5 grid gap-5 md:mt-6 md:grid-cols-3 md:gap-6">
        {EXAMPLES.map(({ flow, tag, title, result }) => (
          <li key={title}>
            <RevealOnScroll className="h-full">
              <WorkflowCard>
                <div className="p-5 md:px-6">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1">{flow}</div>
                    <p className={TAG}>{tag}</p>
                  </div>
                  <h3 className="mt-3.5 font-serif text-[20px] leading-snug text-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-navy/75">
                    {result}
                  </p>
                </div>
              </WorkflowCard>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-7 max-w-[640px] text-center text-[13px] italic leading-[1.6] text-navy/55">
        These are illustrative. Specifics of each engagement stay with the
        client.
      </p>
    </Section>
  );
}
