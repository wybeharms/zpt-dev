import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import ChatbotVsAgentSvg from "./ChatbotVsAgentSvg";

/**
 * Section 2 — cream band. Sets up the chatbot-vs-agent distinction in
 * plain terms. Text on the left, custom SVG on the right (stacks below
 * on mobile).
 */
export default function AgentConcept() {
  return (
    <Section id="agent-concept" bg="cream" align="header">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16">
        <div className="max-w-[520px]">
          <SectionEyebrow bg="cream">Chatbot vs Agent</SectionEyebrow>
          <SectionHeading bg="cream">
            An Agent Is A Chatbot{" "}
            <span className="font-semibold text-cognac">With Hands.</span>
          </SectionHeading>
          <p className="mt-6 text-[16px] leading-[1.7] text-navy/75">
            Claude, ChatGPT, and Gemini are chatbots. Powerful, but they
            answer questions and stop. An agent uses the same underlying
            model and adds tools. It can read your files, call your CRM,
            post to Slack, run a script, write a memo to your house format.
            Same intelligence. More reach.
          </p>
        </div>
        <div className="md:w-[640px]">
          <ChatbotVsAgentSvg />
        </div>
      </div>
    </Section>
  );
}
