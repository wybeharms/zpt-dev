import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const featuredTools = [
  { src: "/external_logos/claude.png", label: "Claude" },
  { src: "/external_logos/openai.png", label: "ChatGPT" },
];

export default function BeyondDefaults() {
  return (
    <Section
      id="beyond-defaults"
      bg="cream"
      align="header"
      bgColor="#E0CDB0"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16">
        <div className="max-w-[760px]">
          <SectionEyebrow bg="cream">Beyond The Defaults</SectionEyebrow>
          <SectionHeading bg="cream">
            But Aren&apos;t Claude And ChatGPT Already Doing This?
          </SectionHeading>
          <div className="mt-8 max-w-[700px] space-y-6">
            <p className="text-[16px] leading-[1.7] text-navy/75">
              Yes, and that&apos;s exactly why this works. Tools like Claude
              and ChatGPT ship powerful defaults: skills, integrations, memory.
              But they&apos;re generic. Every company gets the same starting
              point.
            </p>
            <p className="text-[16px] leading-[1.7] text-navy/75">
              ZPT takes those building blocks and structures them around your
              company. Your context, your workflows, your standards. The
              result: your team gets more out of the tools they&apos;re
              already using, because the tools actually know how the company
              works.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-end md:gap-5">
          {featuredTools.map((tool) => (
            <div
              key={tool.label}
              className="flex w-[120px] flex-col items-center rounded-md border border-navy/10 bg-cream px-4 py-5 md:w-[136px] md:py-6"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center md:h-[84px] md:w-[84px]">
                <img
                  src={tool.src}
                  alt={tool.label}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="mt-3 text-center text-[12px] tracking-wide text-navy/70">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
