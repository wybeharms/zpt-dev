import type { ReactNode } from "react";
import { Section, SectionEyebrow } from "../../components/Sections";

const MARQUETTE_POST_URL =
  "https://www.linkedin.com/posts/zptpartners_aiagents-zpt-zeropersonteam-activity-7488629494686093314-t3Og";
const CAPITAL_INDUSTRIAL_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7498739550450544640";
const FLEX_HR_POST_URL =
  "https://www.linkedin.com/posts/zptpartners-claudecowork-agenticworkflows-share-7530719853301694466-Y_ri";
const NEW_VINTAGE_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7510394139344064512";

const TAN = "#E0CDB0";
const PHOTO_SHADOW = "shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)]";

/**
 * Pill link out to the LinkedIn post a quote is drawn from. All quote
 * rows sit on light backgrounds (cream and tan), so one navy-bordered
 * treatment serves them all.
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
 * Quote column: cognac opening mark, the quote (upright serif, not
 * italic, for readability), then the attribution row and the LinkedIn
 * pill.
 */
function QuoteColumn({
  children,
  logoSrc,
  logoAlt,
  logoClass,
  name,
  detail,
  postUrl,
}: {
  children: ReactNode;
  logoSrc: string;
  logoAlt: string;
  logoClass: string;
  name: string;
  detail: string;
  postUrl: string;
}) {
  return (
    <div>
      <p aria-hidden="true" className="font-serif text-[56px] leading-[0.5] text-cognac">
        &ldquo;
      </p>
      <blockquote className="mt-5 font-serif text-[19px] leading-[1.5] text-navy md:text-[21px]">
        {children}
      </blockquote>
      <div className="mt-7 flex items-center gap-4">
        <img src={logoSrc} alt={logoAlt} className={logoClass} />
        <div>
          <p className="text-[13px] font-medium text-navy">{name}</p>
          <p className="text-[12px] text-navy/60">{detail}</p>
        </div>
      </div>
      <LinkedInPill href={postUrl} />
    </div>
  );
}

/**
 * The four featured engagements, quoted from ZPT's LinkedIn posts. All
 * four clients approved being named. The page has no banner painting:
 * the photos carry the visuals, so the page opens straight on the
 * heading and the first quote.
 *
 * Order (Wybe, November 23rd, 2026): Marquette Associates, Capital
 * Industrial, Flex HR, New Vintage Partners. Rows alternate cream and
 * tan, with the photo switching sides each row.
 */
export function MarquetteHighlight() {
  return (
    // Extra top padding clears the fixed header, since no hero sits
    // above this section any more.
    <Section id="linkedin-marquette" bg="cream" className="pt-32 md:pt-44">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proof</SectionEyebrow>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-navy">
          The Teams We Work With
        </h1>
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-navy/75">
          Real engagements and real rooms. Four recent collaborations, as
          shared on LinkedIn.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-10 md:mt-16 md:grid-cols-[44fr_56fr] md:gap-14">
        <img
          src="/testimonials/marquette_photo.webp"
          alt="With the Marquette Associates team at their Chicago office"
          className={`aspect-[10/11] w-full rounded-xl object-cover md:max-w-[400px] ${PHOTO_SHADOW}`}
        />
        <QuoteColumn
          logoSrc="/testimonials/marquette_associates_mark.webp"
          logoAlt="Marquette Associates logo"
          logoClass="h-6 w-auto"
          name="Marquette Associates"
          detail="Independent investment consulting · Chicago"
          postUrl={MARQUETTE_POST_URL}
        >
          <p>
            Since April, we&apos;ve been working with Marquette Associates,
            an independent investment consulting firm headquartered in
            Chicago, building and rolling out agentic AI workflows
            alongside their team.
          </p>
          <ul className="mt-4 space-y-1.5">
            {[
              "Built a foundational, shareable folder where the agents operate",
              "Worked through multiple real workflows across several departments",
            ].map((line) => (
              <li key={line} className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 select-none font-sans text-[0.8em] font-medium text-cognac"
                >
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            It&apos;s been a great collaboration, and we&apos;re excited for
            what&apos;s next.
          </p>
        </QuoteColumn>
      </div>
    </Section>
  );
}

export function CapitalIndustrialHighlight() {
  return (
    <Section id="linkedin-capital-industrial" bg="cream" bgColor={TAN}>
      <div className="grid items-center gap-10 md:grid-cols-[56fr_44fr] md:gap-14">
        <QuoteColumn
          logoSrc="/testimonials/capital_industrial.webp"
          logoAlt="Capital Industrial logo"
          logoClass="h-9 w-auto"
          name="Capital Industrial LLP"
          detail="Real estate investment · London"
          postUrl={CAPITAL_INDUSTRIAL_POST_URL}
        >
          ZPT is proud to have helped Capital Industrial LLP, a London-based
          real estate investment firm, get their team onto agents. During a
          full-day AI session we centralized the documentation, the skills,
          and the company context into one folder. Everyone left with
          Claude Code running and their own set of instructions and context
          files.
        </QuoteColumn>
        <img
          src="/testimonials/capital_industrial_photo.webp"
          alt="ZPT working session with the Capital Industrial team in London"
          className={`aspect-[4/3] w-full rounded-xl object-cover ${PHOTO_SHADOW}`}
        />
      </div>
    </Section>
  );
}

export function FlexHrHighlight() {
  return (
    <Section id="linkedin-flex-hr" bg="cream">
      <div className="grid items-center gap-10 md:grid-cols-[44fr_56fr] md:gap-14">
        <img
          src="/testimonials/flex_hr_photo.webp"
          alt="Jasper Moll leading a remote Claude Cowork session with the Flex HR team"
          className={`aspect-[4/3] w-full rounded-xl object-cover ${PHOTO_SHADOW}`}
        />
        <QuoteColumn
          logoSrc="/testimonials/flex_hr.webp"
          logoAlt="Flex HR logo"
          logoClass="h-10 w-auto"
          name="Jenny Morehead"
          detail="CEO, Flex HR"
          postUrl={FLEX_HR_POST_URL}
        >
          We&apos;re thrilled to partner with ZPT Partners. The portal that
          ZPT provided made the AI technology easy to understand and we
          appreciated the customized work that the ZPT professionals did
          with the team. At Flex HR we lead with our exceptional HR,
          payroll, and recruitment professionals. We want to responsibly
          set up AI to help power the back end of what we do and
          efficiently use our tech stack. ZPT Partners helped each of the
          departments at our company with their shared workflows. We will
          enthusiastically continue working with ZPT to make sure the
          day-to-day work that we&apos;re doing allows us to consistently
          overdeliver for our clients.
        </QuoteColumn>
      </div>
    </Section>
  );
}

export function NewVintageHighlight() {
  return (
    <Section id="linkedin-new-vintage" bg="cream" bgColor={TAN}>
      <div className="grid items-center gap-10 md:grid-cols-[56fr_44fr] md:gap-14">
        <QuoteColumn
          logoSrc="/testimonials/new_vintage_partners_mark.webp"
          logoAlt="New Vintage Partners logo"
          logoClass="h-9 w-auto"
          name="Brian Downs"
          detail="Runs investments at New Vintage Partners · New York"
          postUrl={NEW_VINTAGE_POST_URL}
        >
          Before ZPT, we were using Claude on and off, everyone doing their
          own thing, mostly as a chatbot and sometimes poking at agents
          without really knowing what they could do. Since working with
          ZPT, we&apos;ve centralized that into one shared folder built
          around how we actually work. The foundation has been set and
          we&apos;re excited to keep building on this!
        </QuoteColumn>
        <img
          src="/testimonials/new_vintage_partners_photo.webp"
          alt="Wybe Harms and Brian Downs at the New Vintage Partners office in New York"
          className={`aspect-[10/11] w-full rounded-xl object-cover md:max-w-[400px] md:justify-self-end ${PHOTO_SHADOW}`}
        />
      </div>
    </Section>
  );
}
