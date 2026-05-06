import RevealOnScroll from "../../components/RevealOnScroll";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

type Row = {
  lead: string;
  copy: string;
};

const rows: Row[] = [
  {
    lead: "Use Your Templates.",
    copy: "A chatbot needs you to upload an example each time. An agent has your template library available, and writes the next memo in your house format without prompting.",
  },
  {
    lead: "Connect To Your Tools.",
    copy: "A chatbot can describe what's in your Notion or Salesforce. An agent reaches them through MCP and reads, writes, or updates the record directly.",
  },
  {
    lead: "Work Across Files.",
    copy: "A chatbot lives in a single conversation. An agent navigates your folder, reads multiple documents, and produces an output that draws on all of them.",
  },
  {
    lead: "Remember Your Context.",
    copy: "A chatbot starts from a blank slate. An agent reads your CLAUDE.md and company-context folder before it does anything, so it knows your voice, your terminology, and your standards.",
  },
];

/**
 * Section 3 — navy band. Same divider rhythm as EntryPoints, but no icon
 * column: each row is just a bold lead phrase plus a body paragraph.
 */
export default function AgentInPractice() {
  return (
    <Section id="agent-in-practice" bg="navy" align="header">
      <div className="max-w-[760px]">
        <SectionEyebrow bg="navy">In Practice</SectionEyebrow>
        <SectionHeading bg="navy">
          Four Things An Agent Does That A Chatbot Cannot.
        </SectionHeading>
      </div>

      <ul className="mt-14 border-t border-cream/15">
        {rows.map(({ lead, copy }) => (
          <li
            key={lead}
            className="group border-b border-cream/15 transition-colors duration-200 hover:bg-[#E5DBC6]"
          >
            <RevealOnScroll className="grid gap-4 px-3 py-9 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:gap-12 md:px-5">
              <p className="font-serif text-[22px] leading-snug text-cream transition-colors duration-200 group-hover:text-navy md:text-[24px]">
                {lead}
              </p>
              <p className="text-[15px] leading-[1.65] text-cream/75 transition-colors duration-200 group-hover:text-navy/75 md:pt-2">
                {copy}
              </p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
}
