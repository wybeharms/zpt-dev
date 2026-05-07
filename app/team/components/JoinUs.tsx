import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const CALENDLY_URL = "https://calendly.com/zptpartners/30min";

/**
 * Apply-to-ZPT call-out. Sits between the team grid and the final CTA.
 * Tinted cream (#E0CDB0) so it reads as a distinct band from the cream
 * team grid above without breaking the alternating cream/navy rhythm
 * leading into the final navy CTA.
 *
 * The Apply button routes through the same Calendly link as Book A
 * Call. Wybe handles intake personally; emails/forms can be added
 * later if volume warrants.
 */
export default function JoinUs() {
  return (
    <Section id="join-us" bg="cream" align="header" bgColor="#E0CDB0">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow bg="cream">Apply</SectionEyebrow>
        <SectionHeading bg="cream">Become A ZPTer.</SectionHeading>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-navy/75">
          Every ZPTer has passed the ZPT exam and shipped production AI
          systems in the field. If you&apos;ve done the same and want to
          deploy alongside us, get in touch.
        </p>
        <div className="mt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-cognac px-8 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Apply To Join
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
