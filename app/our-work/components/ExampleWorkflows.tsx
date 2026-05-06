import RevealOnScroll from "../../components/RevealOnScroll";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import {
  ChartIcon,
  KnotIcon,
  LiferingIcon,
} from "../../components/MarineIcons";

type Workflow = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  industry: string;
  body: string;
};

const workflows: Workflow[] = [
  {
    Icon: ChartIcon,
    title: "Investment Memo Drafting",
    industry: "Investment consulting",
    body: "Pulls fund factsheets, performance data, and prior memos into a single drafting workflow. The team reviews and ships in hours instead of days.",
  },
  {
    Icon: KnotIcon,
    title: "RFP Response Builder",
    industry: "Asset management",
    body: "Reads the RFP, mines the firm's prior responses for the right answer to each question, and assembles a first draft formatted to the firm's voice.",
  },
  {
    Icon: LiferingIcon,
    title: "Weekly Client Update Digest",
    industry: "Private equity",
    body: "Reads every portfolio company update for the week and produces a single digest LP-ready, with material items flagged for the partner's review.",
  },
];

export default function ExampleWorkflows() {
  return (
    <Section id="example-workflows" bg="cream" align="header">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Workflows We&apos;ve Shipped</SectionEyebrow>
        <SectionHeading bg="cream">A Few Examples.</SectionHeading>
        <p className="mt-6 max-w-[640px] text-[16px] leading-[1.7] text-navy/75">
          Every engagement is unique. These are the kinds of workflows that
          have come out of past builds.
        </p>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
        {workflows.map(({ Icon, title, industry, body }) => (
          <li key={title}>
            <RevealOnScroll className="flex h-full flex-col rounded-md border border-navy/10 bg-cream p-7 transition-colors duration-150 hover:border-navy/25">
              <Icon className="h-8 w-8 text-cognac" />
              <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.22em] text-cognac/85">
                {industry}
              </p>
              <h3 className="mt-2 font-serif text-[22px] leading-snug text-navy">
                {title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] text-navy/75">
                {body}
              </p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-[640px] text-center text-[13px] italic leading-[1.6] text-navy/55">
        These are illustrative. Specifics of each engagement stay with the
        client.
      </p>
    </Section>
  );
}
