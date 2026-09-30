import { Section, SectionEyebrow } from "../../components/Sections";

const NEW_VINTAGE_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7510394139344064512";
const CAPITAL_INDUSTRIAL_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7498739550450544640";
const MARQUETTE_POST_URL =
  "https://www.linkedin.com/posts/zptpartners_aiagents-zpt-zeropersonteam-activity-7488629494686093314-t3Og";

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
 * The three featured engagements, quoted from ZPT's LinkedIn posts.
 * All three clients approved being named. First row: New Vintage
 * Partners, photo left on cream, under the page heading. It leads
 * because it is the one quote in a client's own words (Brian Downs
 * approved the wording for the post). Second row: Marquette Associates,
 * photo right on the tan band. Third row: Capital Industrial, photo
 * left on cream, so the page alternates like the home page does.
 */
export function NewVintageHighlight() {
  return (
    <Section id="linkedin-new-vintage" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proof</SectionEyebrow>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-navy">
          The Teams We Work With
        </h1>
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-navy/75">
          Real engagements and real rooms. Three recent collaborations, as
          shared on LinkedIn.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-10 md:mt-16 md:grid-cols-[44fr_56fr] md:gap-14">
        <img
          src="/testimonials/new_vintage_partners_photo.webp"
          alt="Wybe Harms and Brian Downs at the New Vintage Partners office in New York"
          className="aspect-[10/11] w-full rounded-xl object-cover shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)] md:max-w-[400px]"
        />
        <div>
          <p aria-hidden="true" className="font-serif text-[56px] leading-[0.5] text-cognac">
            &ldquo;
          </p>
          <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-navy md:text-[21px]">
            Before ZPT, we were using Claude on and off, everyone doing
            their own thing, mostly as a chatbot and sometimes poking at
            agents without really knowing what they could do. Since working
            with ZPT, we&apos;ve centralized that into one shared folder
            built around how we actually work. The foundation has been set
            and we&apos;re excited to keep building on this!
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <img
              src="/testimonials/new_vintage_partners_mark.webp"
              alt="New Vintage Partners logo"
              className="h-9 w-auto"
            />
            <div>
              <p className="text-[13px] font-medium text-navy">Brian Downs</p>
              <p className="text-[12px] text-navy/60">
                Runs investments at New Vintage Partners · New York
              </p>
            </div>
          </div>
          <LinkedInPill href={NEW_VINTAGE_POST_URL} />
        </div>
      </div>
    </Section>
  );
}

export function CapitalIndustrialHighlight() {
  return (
    <Section id="linkedin-capital-industrial" bg="cream">
      <div className="grid items-center gap-10 md:grid-cols-[44fr_56fr] md:gap-14">
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
            folder. Everyone left with Claude Code running and their own
            set of instructions and context files.
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
          {/* One type treatment for the whole quote: the opening line, the
              two points and the closing line share font, size and color. */}
          <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-navy md:text-[21px]">
            <p>
              Since April, we&apos;ve been working with Marquette
              Associates, an independent investment consulting firm
              headquartered in Chicago, building and rolling out agentic AI
              workflows alongside their team.
            </p>
            <ul className="mt-4 space-y-1.5">
              {[
                "Built a foundational, shareable folder where the agents operate",
                "Worked through multiple real workflows across several departments",
              ].map((line) => (
                <li key={line} className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 select-none font-sans text-[0.8em] font-medium not-italic text-cognac"
                  >
                    +
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              It&apos;s been a great collaboration, and we&apos;re excited
              for what&apos;s next.
            </p>
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <img
              src="/testimonials/marquette_associates_mark.webp"
              alt="Marquette Associates logo"
              className="h-6 w-auto"
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
          className="aspect-[10/11] w-full rounded-xl object-cover shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)] md:max-w-[400px] md:justify-self-end"
        />
      </div>
    </Section>
  );
}
