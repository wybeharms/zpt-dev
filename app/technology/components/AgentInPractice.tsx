import type { ReactNode } from "react";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import AgentInPracticeRow from "./AgentInPracticeRow";

type Row = {
  lead: string;
  copy: ReactNode;
};

// Each row's copy bolds the concrete agent capability (the "what it
// actually does") so a skim of the section still reads as a list of
// concrete agent powers.
const rows: Row[] = [
  {
    lead: "Use Your Templates.",
    copy: (
      <>
        A chatbot needs you to upload an example each time. An agent has{" "}
        <strong className="font-semibold">your template library</strong>{" "}
        available, and writes the next memo in{" "}
        <strong className="font-semibold">your company format</strong> without
        prompting.
      </>
    ),
  },
  {
    lead: "Connect To Your Tools.",
    copy: (
      <>
        A chatbot can describe what&apos;s in your{" "}
        <strong className="font-semibold">Notion or Salesforce</strong>. An
        agent reaches them through MCP and{" "}
        <strong className="font-semibold">
          reads, writes, or updates the record directly
        </strong>
        .
      </>
    ),
  },
  {
    lead: "Work Across Files.",
    copy: (
      <>
        A chatbot lives in a single conversation. An agent{" "}
        <strong className="font-semibold">
          navigates your folder, reads multiple documents
        </strong>
        , and produces an output that draws on all of them.
      </>
    ),
  },
  {
    lead: "Remember Your Context.",
    copy: (
      <>
        A chatbot starts from a blank slate. An agent reads your{" "}
        <strong className="font-semibold">
          CLAUDE.md and company-context folder
        </strong>{" "}
        before it does anything, so it knows your voice, your terminology, and
        your standards.
      </>
    ),
  },
];

/**
 * Section 3 — navy band. Same divider rhythm as EntryPoints. Each row
 * is a bold lead phrase plus body copy. Rows have a cursor-tracking
 * cognac glow on hover (driven by AgentInPracticeRow client component).
 * The heading colors "Agent" and "Chatbot" in cognac to keep the
 * comparison front-of-mind as the reader scans the rows below.
 */
export default function AgentInPractice() {
  return (
    <Section id="agent-in-practice" bg="navy" align="header">
      <div className="max-w-[760px]">
        <SectionEyebrow bg="navy">In Practice</SectionEyebrow>
        <SectionHeading bg="navy">
          Four Things An <span className="text-cognac">Agent</span> Does That A{" "}
          <span className="text-cognac">Chatbot</span> Cannot.
        </SectionHeading>
      </div>

      <ul className="mt-14 border-t border-cream/15">
        {rows.map((row) => (
          <AgentInPracticeRow key={row.lead} {...row} />
        ))}
      </ul>
    </Section>
  );
}
