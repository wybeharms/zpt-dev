import ExampleDocsFan from "../../components/ExampleDocsFan";
import { Section } from "../../components/Sections";

/**
 * Slim band that hands the reader from the testimonials to the example
 * workflows on /our-work. It replaced the "How The Work Lands" cards,
 * which repeated the three quote rows above them. The whole card is one
 * link.
 */
export default function OurWorkTeaser() {
  return (
    <Section id="our-work-teaser" bg="cream" compact>
      <a
        href="/our-work#example-workflows"
        className="group grid items-center gap-9 rounded-xl border border-navy/15 bg-navy/[0.03] p-7 transition-colors duration-150 hover:border-cognac/40 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 md:px-10 md:py-9"
      >
        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.22em] text-cognac">
            Example Workflows
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-navy">
            What The Work Looks Like
          </h2>
          <p className="mt-3 max-w-[460px] text-[15px] leading-[1.6] text-navy/70">
            Four example workflows, from due diligence to supplier tracking.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-cognac transition-colors duration-150 group-hover:text-cognac-deep">
            See Example Workflows
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
        <ExampleDocsFan className="pb-[0.6em] text-[7.5px] sm:text-[10px]" />
      </a>
    </Section>
  );
}
