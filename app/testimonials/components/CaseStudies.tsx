import { Section, SectionEyebrow, SectionHeading } from "../../components/Sections";

const CASES = [
  {
    name: "Marquette Associates",
    copy: "A foundational, shareable agent folder, with real workflows built and rolled out across several departments.",
  },
  {
    name: "Capital Industrial",
    copy: "A full-day session that centralized company context into one shared folder and got the whole team running Claude Code.",
  },
  {
    name: "New Vintage Partners",
    copy: "Agent workflows for a specialist venture secondaries fund, built side by side in New York.",
  },
];

/**
 * Compact case summaries. No per-card links yet: the section-level
 * link routes to /our-work, which shows the example workflows behind
 * this kind of engagement. Swap in dedicated case-study pages here
 * once they are written.
 */
export default function CaseStudies() {
  return (
    <Section id="case-studies" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Case Studies</SectionEyebrow>
        <SectionHeading bg="cream">How The Work Lands</SectionHeading>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
        {CASES.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-navy/15 bg-navy/[0.03] p-6"
          >
            <p className="font-serif text-[20px] leading-snug text-navy">
              {item.name}
            </p>
            <p className="mt-2.5 text-[13.5px] leading-[1.6] text-navy/70">
              {item.copy}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/our-work"
          className="group inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-cognac transition-colors duration-150 hover:text-cognac-deep"
        >
          See Example Workflows
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
