import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import CompassAlignment from "./CompassAlignment";

export default function ToolsSetup() {
  return (
    <Section id="tools-setup" bg="navy" align="header">
      <div className="max-w-[760px]">
        <SectionEyebrow bg="navy">Get Everyone On Board</SectionEyebrow>
        <SectionHeading bg="navy">
          Different Starting Points,
          <br />
          <span className="text-cognac-light">Same Destination.</span>
        </SectionHeading>
        <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-cream/75">
          Most teams haven&apos;t worked with agents before, and even within
          one team, people start at very different levels. ZPT educates the
          team to get everyone on the same page, then sets up the right
          accounts and tools so the foundation is real and shared.
        </p>
      </div>

      {/* Compass alignment visualization — generous breathing room above
          and below so the section reads calmly. */}
      <div className="mt-20 mb-4 md:mt-28 md:mb-12">
        <CompassAlignment />
      </div>
    </Section>
  );
}
