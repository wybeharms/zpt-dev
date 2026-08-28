import { Section, SectionEyebrow } from "../../components/Sections";

const CAPITAL_INDUSTRIAL_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7498739550450544640";
const MARQUETTE_POST_URL =
  "https://www.linkedin.com/posts/zptpartners_aiagents-zpt-zeropersonteam-activity-7488629494686093314-t3Og";

/**
 * Pill link out to the LinkedIn post a quote is drawn from. Both quote
 * rows sit on light backgrounds (cream and tan), so one navy-bordered
 * treatment serves both.
 */
function LinkedInPill({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-2.5 rounded-md border border-navy/25 px-4 py-2.5 text-[13px] font-medium tracking-wide text-navy transition-colors duration-150 hover:border-navy/55"
    >
      <span
        aria-hidden="true"
        className="rounded-[3px] bg-[#0A66C2] px-[5px] py-[3px] font-sans text-[10px] font-bold leading-none text-white"
      >
        in
      </span>
      Read The Post On LinkedIn
      <span aria-hidden="true">→</span>
    </a>
  );
}

/**
 * The two featured engagements, quoted from ZPT&apos;s LinkedIn posts.
 * Both clients approved being named. First row: Capital Industrial,
 * photo left on cream. Second row: Marquette Associates, photo right
 * on the tan band so the page alternates like the home page does.
 */
export function CapitalIndustrialHighlight() {
  return (
    <Section id="linkedin-capital-industrial" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proof</SectionEyebrow>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-navy">
          The Teams We Work With
        </h1>
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-navy/75">
          Real engagements and real rooms. Two recent collaborations, as
          shared on LinkedIn.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-10 md:mt-16 md:grid-cols-[44fr_56fr] md:gap-14">
        <img
          src="/testimonials/capital_industrial_photo.webp"
          alt="ZPT working session with the Capital Industrial team in London"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)]"
        />
        <div>
          <p aria-hidden="true" className="font-serif text-[56px] leading-[0.5] text-cognac">
            &ldquo;
          </p>
          <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-navy md:text-[21px]">
            ZPT is proud to have helped Capital Industrial LLP, a
            London-based real estate investment firm, get their team onto
            agents. During a full-day AI session we centralized the
            documentation, the skills, and the company context into one
            folder, shared properly and with the right permissions, while
            getting the team up to speed on how to use these agents well.
            Everyone left with Claude Code running and their own set of
            instructions and context files.
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <img
              src="/testimonials/capital_industrial.webp"
              alt="Capital Industrial logo"
              className="h-9 w-auto"
            />
            <div>
              <p className="text-[13px] font-medium text-navy">
                Capital Industrial LLP
              </p>
              <p className="text-[12px] text-navy/60">
                Real estate investment · London
              </p>
            </div>
          </div>
          <LinkedInPill href={CAPITAL_INDUSTRIAL_POST_URL} />
        </div>
      </div>
    </Section>
  );
}

export function MarquetteHighlight() {
  return (
    <Section id="linkedin-marquette" bg="cream" bgColor="#E0CDB0">
      <div className="grid items-center gap-10 md:grid-cols-[56fr_44fr] md:gap-14">
        <div>
          <p aria-hidden="true" className="font-serif text-[56px] leading-[0.5] text-cognac">
            &ldquo;
          </p>
          <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-navy md:text-[21px]">
            Since April, we&apos;ve been working with Marquette Associates,
            an independent investment consulting firm headquartered in
            Chicago, building and rolling out agentic AI workflows
            alongside their team.
          </blockquote>
          <ul className="mt-5 space-y-2.5">
            {[
              "Built a foundational, shareable folder where the agents operate",
              "Worked through multiple real workflows across several departments",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[15px] leading-[1.6] text-navy/80"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 select-none font-medium text-cognac"
                >
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-serif text-[17px] italic leading-[1.5] text-navy/85">
            It&apos;s been a great collaboration, and we&apos;re excited
            for what&apos;s next.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <img
              src="/testimonials/marquette_associates.webp"
              alt="Marquette Associates logo"
              className="h-12 w-auto"
            />
            <div>
              <p className="text-[13px] font-medium text-navy">
                Marquette Associates
              </p>
              <p className="text-[12px] text-navy/60">
                Independent investment consulting · Chicago
              </p>
            </div>
          </div>
          <LinkedInPill href={MARQUETTE_POST_URL} />
        </div>
        <img
          src="/testimonials/marquette_photo.webp"
          alt="With the Marquette Associates team at their Chicago office"
          className="aspect-[10/11] w-full rounded-xl object-cover shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)]"
        />
      </div>
    </Section>
  );
}
