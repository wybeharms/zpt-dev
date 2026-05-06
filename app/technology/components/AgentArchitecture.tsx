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

      {/* Two-column body: paragraphs left, diagram right (stacks on mobile). */}
      <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,720px)] md:items-center md:gap-16">
        <div className="space-y-8">
          {parts.map(({ name, copy }) => (
            <div key={name}>
              <p className="font-serif text-[22px] leading-snug text-navy">
                {name}
              </p>
              <p className="mt-3 max-w-[520px] pl-5 text-[15px] leading-[1.65] text-navy/75">
                {copy}
              </p>
            </div>
          ))}
        </div>
        <div>
          <HarnessSvg />
        </div>
      </div>
    </Section>
  );
}
