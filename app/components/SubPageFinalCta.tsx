import { SectionEyebrow, SectionHeading } from "./Sections";

type Props = {
  /** Optional painting URL rendered behind the navy gradient overlay. */
  backgroundImage?: string;
};

/**
 * Shared final CTA used by sub-pages (/how-it-works, /our-work). When
 * `backgroundImage` is passed, renders a home-page-style bg painting
 * with a navy gradient overlay (transparent at the top so the painting
 * peeks through, opaque at the bottom for text legibility). Without it,
 * falls back to a plain navy band.
 */
export default function SubPageFinalCta({ backgroundImage }: Props = {}) {
  return (
    <section
      id="final-cta"
      className="relative w-full overflow-hidden bg-navy py-32 text-cream md:py-40"
    >
      {backgroundImage ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 opacity-[0.18]"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,12,40,0.05) 0%, rgba(12,12,40,0.55) 50%, #0C0C28 100%)",
            }}
          />
        </>
      ) : null}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionEyebrow bg="navy">Start Here</SectionEyebrow>
          <SectionHeading bg="navy">
            Start With A Conversation.
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-cream/75">
            Every engagement begins with a conversation. Book a 30-minute
            call to talk through your team&apos;s situation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:wybe@zptpartners.com"
              className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-8 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
            >
              Book A Call
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[5px] border border-cream/85 px-8 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cream hover:text-navy"
            >
              Download The One-Pager
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
