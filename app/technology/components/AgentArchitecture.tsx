import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import HarnessSvg from "./HarnessSvg";

type Part = {
  name: string;
  copy: string;
};

const parts: Part[] = [
  {
    name: "Brain.",
    copy: "The same large language model that powers Claude, ChatGPT, or Gemini. The agent is not a different kind of intelligence. It's the same intelligence, given more to do.",
  },
  {
    name: "Hands.",
    copy: "Tools the model can call: read a file, run a query, search the web, push to GitHub, post a Slack message. ZPT picks the tools that match each workflow.",
  },
  {
    name: "Harness.",
    copy: "The runtime that holds Brain and Hands together. The major options are Claude Desktop, Codex, and Microsoft Copilot Cowork. ZPT helps you pick the combination that matches your security policies.",
  },
];

/**
 * Section 4 — cream band. Heading + lede across the top, then a two-
 * column body: Brain/Hands/Harness paragraphs stack on the left, the
 * architecture diagram (HarnessSvg) sits on the right. On mobile they
 * stack: paragraphs first, diagram below. The side-by-side layout
 * keeps the section compact.
 */
export default function AgentArchitecture() {
  return (
    <Section id="agent-architecture" bg="cream" align="header">
      <div className="max-w-[1100px]">
        <SectionEyebrow bg="cream">Architecture</SectionEyebrow>
        <SectionHeading bg="cream">
          The Three Parts Of An Agent.
        </SectionHeading>
        <p className="mt-6 text-[16px] leading-[1.7] text-navy/75 md:whitespace-nowrap">
          Every working agent has the same three pieces, and the whole
          package lives inside a folder you own.
        </p>
      </div>

      {/* Two-column body: vertical assembly on the left, diagram on the
          right. The assembly visualizes the three parts as nodes on a
          single cognac thread, so the reader sees Brain, Hands, and
          Harness as one connected system rather than three loose
          paragraphs. The right column keeps the existing HarnessSvg as
          a complementary visual anchor. Stacks on mobile. */}
      <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,720px)] md:items-center md:gap-16">
        <ul className="relative">
          {parts.map(({ name, copy }, i) => {
            const isLast = i === parts.length - 1;
            return (
              <li
                key={name}
                className={`relative pl-8 ${isLast ? "" : "pb-10"}`}
              >
                {/* Connector segment: extends from this node's center
                    down through the row's bottom padding so the visual
                    thread runs continuously into the next node. Hidden
                    on the last row. */}
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-3 bottom-0 left-[5px] w-px bg-cognac/40"
                  />
                ) : null}
                {/* Node on the thread, centered on the connector line. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 left-0 block h-[11px] w-[11px] rounded-full bg-cognac ring-4 ring-cream"
                />
                <p className="font-serif font-semibold text-[22px] leading-snug text-cognac">
                  {name}
                </p>
                <p className="mt-3 max-w-[520px] text-[15px] leading-[1.65] text-navy/75">
                  {copy}
                </p>
              </li>
            );
          })}
        </ul>
        <div>
          <HarnessSvg />
        </div>
      </div>
    </Section>
  );
}
