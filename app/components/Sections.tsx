import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";
import PortraitSwap from "./PortraitSwap";
import RoleLabel from "./RoleLabel";
import YoutubeFacade from "./YoutubeFacade";
import TrustedMarqueeMobile from "./TrustedMarqueeMobile";
import WhyZptCard from "./WhyZptCard";
import OurApproachRow from "./OurApproachRow";
import TrustedLogoBody, { type TrustedLogo } from "./TrustedLogoBody";
import TrustedMarqueeDesktop from "./TrustedMarqueeDesktop";
import { TEAM } from "./team-data";
import {
  AnchorIcon,
  CompassIcon,
  FogIcon,
  SailboatIcon,
  SextantIcon,
} from "./MarineIcons";

export type Bg = "cream" | "navy";
export type SectionAlign = "default" | "header";

export function Section({
  id,
  bg,
  align = "default",
  bgColor,
  backgroundWord,
  children,
  className = "",
}: {
  id: string;
  bg: Bg;
  align?: SectionAlign;
  /** Optional bg-color override (e.g. "#E0CDB0") so a section can break
      the alternating cream/navy rhythm with a custom shade. The text color
      still follows `bg`. */
  bgColor?: string;
  /** Optional giant faint serif word that bleeds off the top-right corner
   *  as a decorative watermark behind the section content (Lerai-style).
   *  Pass one short word, displayed uppercase. */
  backgroundWord?: string;
  children: ReactNode;
  className?: string;
}) {
  const textColor = bg === "cream" ? "text-navy" : "text-cream";
  const bgClass = bgColor
    ? ""
    : bg === "cream"
      ? "bg-cream"
      : "bg-navy";
  // align="header" widens the inner container to 1400px so eyebrows /
  // headings line up with the header logo's left edge. Default 1200px
  // stays for the home page.
  const innerMax = align === "header" ? "max-w-[1400px]" : "max-w-[1200px]";
  const wordColor = bg === "cream" ? "text-navy/[0.05]" : "text-cream/[0.05]";
  return (
    <section
      id={id}
      className={`relative w-full ${backgroundWord ? "overflow-hidden" : ""} ${bgClass} ${textColor} py-20 md:py-32 ${className}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      {backgroundWord ? (
        // -top-[0.22em] uses em (relative to the watermark's own
        // font-size) so the negative shift scales with viewport-driven
        // clamp(). 0.22em clips the empty space above the cap of
        // Cormorant glyphs at every size, so the visible cap of the
        // word sits flush with the section's top edge instead of
        // leaving a band of bg color above it.
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -top-[0.22em] right-0 select-none font-serif text-[clamp(6.5rem,20vw,16rem)] font-light uppercase leading-none tracking-tight md:right-2 ${wordColor}`}
        >
          {backgroundWord}
        </span>
      ) : null}
      <div className={`relative mx-auto ${innerMax} px-6 md:px-10`}>
        {children}
      </div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  bg,
}: {
  children: ReactNode;
  bg: Bg;
}) {
  const color = bg === "cream" ? "text-cognac" : "text-cognac-light";
  return (
    <p
      className={`mb-5 text-[12px] font-medium uppercase tracking-[0.22em] ${color}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  bg,
}: {
  children: ReactNode;
  bg: Bg;
}) {
  const accent = bg === "cream" ? "text-navy" : "text-cream";
  return (
    <h2
      className={`font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] ${accent}`}
    >
      {children}
    </h2>
  );
}

/* ---------- 2. Trusted By ---------- */
const TRUSTED_LOGOS: TrustedLogo[] = [
  {
    file: "/testimonials/marquette_associates.webp",
    name: "Marquette Associates",
    location: "Chicago, USA",
    description: "150-person independent investment consultant",
    size: "lg",
  },
  {
    file: "/testimonials/new_vintage_partners.webp",
    name: "New Vintage Partners",
    location: "New York, USA",
    description: "Specialist venture secondaries fund",
    size: "ml",
  },
  {
    file: "/testimonials/CFA_Institute.png",
    name: "CFA Society",
    location: "Istanbul, Turkey",
    description: "Global professional body for CFA charterholders",
    size: "sm",
  },
  {
    file: "/testimonials/mdv_design.webp",
    name: "MDV Design",
    location: "New York, USA",
    description: "Manhattan-based luxury interior design studio",
  },
  {
    file: "/testimonials/brutalia.webp",
    name: "Brutalia",
    location: "Barcelona, Spain",
    description: "Fastest-growing pasta chain in Spain",
  },
];

// Future destination for "See Testimonials" — kept here as a reminder
// for when the /testimonials page ships. The CTA below the strip and
// the desktop click-to-navigate are currently DISABLED; flip them back
// on by replacing TrustedLogoCard's <div> with an <a href={TESTIMONIALS_HREF}>
// and re-rendering the "See Testimonials" CTA below the marquee.
// const TESTIMONIALS_HREF = "/testimonials";

/**
 * Desktop / marquee version of the card. Currently non-clickable, hover
 * reveals the description via `group`. Click navigation to /testimonials
 * is disabled until that page ships; see comment on TESTIMONIALS_HREF
 * above for how to re-enable. The body markup itself lives in
 * TrustedLogoBody so the mobile tap card can render the same visual.
 */
function TrustedLogoLinkCard({ logo }: { logo: TrustedLogo }) {
  return (
    <div className="group block flex-shrink-0">
      <TrustedLogoBody logo={logo} />
    </div>
  );
}

export function TrustedBy() {
  return (
    <Section id="trusted-by" bg="cream" className="py-16 md:py-20">
      <p className="mb-10 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-cognac">
        Trusted By
      </p>

      {/* Mobile: auto-scrolling marquee + native touch swipe. */}
      <div className="md:hidden">
        <TrustedMarqueeMobile logos={TRUSTED_LOGOS} />
        <p className="mt-3 text-center text-[11px] text-navy/50">
          Swipe to scroll, tap a logo to see the firm.
        </p>
      </div>

      {/* Desktop: auto-scrolling marquee + mouse click-and-drag scrub. */}
      <TrustedMarqueeDesktop logos={TRUSTED_LOGOS} />

      {/* Static fallback shown only when the user prefers reduced motion
          (desktop). The animated marquee above is hidden in that case via
          motion-reduce:hidden. */}
      <ul className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-6 motion-reduce:md:flex">
        {TRUSTED_LOGOS.map((logo) => (
          <li key={logo.name}>
            <TrustedLogoLinkCard logo={logo} />
          </li>
        ))}
      </ul>

      {/* "See Testimonials" CTA disabled until /testimonials ships; see
          comment on TESTIMONIALS_HREF above for how to re-enable. */}
    </Section>
  );
}

/* ---------- 3. Our Approach (editorial vertical list) ---------- */
export function OurApproach() {
  const steps = [
    {
      number: "01",
      label: "Education",
      copy: "A working session on what agents can and can't do, with real examples.",
    },
    {
      number: "02",
      label: "Discovery",
      copy: "On-site mapping of your real workflows. We surface the highest-leverage opportunities to improve.",
    },
    {
      number: "03",
      label: "Build",
      copy: "We map your existing workflows and mirror them so an agent runs part or all of each one. Your team uses the setup through Claude, Codex, or Microsoft Copilot, and we guide you to the right combination for the services you already run.",
    },
  ];
  return (
    <Section id="our-approach" bg="navy" backgroundWord="Method">
      {/* Section header sits above the card, mirroring Lerai's pattern. */}
      <div className="max-w-[720px]">
        <SectionEyebrow bg="navy">How We Help</SectionEyebrow>
        <SectionHeading bg="navy">Our Approach</SectionHeading>
      </div>

      {/* Content card — subtle cream tint on navy, defined edges. */}
      <div className="mt-10 rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 md:mt-14 md:p-12">
          <p className="text-[16px] leading-[1.7] text-cream/85">
            Every company is different. ZPT meets your team where you are.
            Engagements range from a half-day education session to a full
            multi-workflow build, sized to where your team is ready. Three
            steps anchor the work.
          </p>

          <ul className="mt-8 border-t border-cream/15">
            {steps.map((step) => (
              <OurApproachRow key={step.label} {...step} />
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="/our-work"
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-cognac-light transition-colors duration-150 hover:text-cream"
            >
              See examples of what we&apos;ve shipped
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
    </Section>
  );
}

/* ---------- 5. Watch ZPT in Action ---------- */
export function WatchZpt() {
  return (
    <Section id="watch" bg="cream" bgColor="#E0CDB0">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow bg="cream">Preview</SectionEyebrow>
        <SectionHeading bg="cream">Watch ZPT in Action</SectionHeading>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-navy/75">
          A short introduction to what ZPT builds and how your team runs it.
        </p>
        <div className="mt-12">
          <YoutubeFacade
            videoId="z7pos9R_zE4"
            title="Watch ZPT in Action"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 6. Why ZPT ---------- */
export function WhyZpt() {
  const blocks = [
    {
      Icon: SextantIcon,
      lead: "Built by Practitioners.",
      copy: "ZPTers are obsessed with AI. We test every new framework and model the day it ships, and we've put each in production, so we know what holds up under real work.",
      expanded:
        "ZPT grew out of a software company. Every team member uses agents in their own daily work. The methods we recommend are the ones we run ourselves.",
    },
    {
      Icon: CompassIcon,
      lead: "Track Record.",
      copy: "We've worked across financial services, design, and hospitality on workflows that range from deep research to daily operations.",
      expanded:
        "Allocators, designers, hospitality operators. The patterns repeat across sectors and team sizes, so we know which approaches hold up and which ones break.",
    },
    {
      Icon: SailboatIcon,
      lead: "Start Small, No Commitment.",
      copy: "Every engagement is low-risk by design. The setup is AI agnostic and runs on tools you already have, like SharePoint or Dropbox. Nothing is locked in.",
      expanded:
        "A half-day education session is a legitimate first step, no retainer required. Runs on your own Claude, Codex, or Copilot license.",
    },
  ];
  return (
    <Section id="why-zpt" bg="cream" align="header" backgroundWord="Why">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proven</SectionEyebrow>
        <SectionHeading bg="cream">Why ZPT</SectionHeading>
      </div>
      {/* No items-start: grid stretches each card to the tallest in the
          row so the bordered cards line up even with different copy
          lengths (Example footer pinned to the bottom inside the card). */}
      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
        {blocks.map(({ Icon, lead, copy, expanded }) => (
          <WhyZptCard
            key={lead}
            icon={<Icon className="h-7 w-7" />}
            lead={lead}
            copy={copy}
            expanded={expanded}
          />
        ))}
      </div>
    </Section>
  );
}

/* ---------- 7. Is ZPT Right for Your Company ---------- */
export function IsZptRight() {
  const yes = [
    "You know AI matters but haven't found a way to use it.",
    "Even an education session or discovery is a fine place to start.",
    "You're ready to face the AI revolution head-on.",
    "You'd rather own the setup than subscribe.",
  ];
  const notYet = [
    "You're not ready to invest the time to explore.",
    "You're not willing to license enterprise Claude, Codex, or Copilot.",
    "You'd rather outsource critical processes to an external firm.",
    "You want a chatbot wrapper, not a working system.",
  ];
  return (
    <Section id="is-zpt-right" bg="navy">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="navy">Qualify</SectionEyebrow>
        <SectionHeading bg="navy">Is ZPT Right for Your Company</SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <div className="flex items-center gap-3 text-cognac-light">
            <AnchorIcon className="h-7 w-7" />
            <p className="font-serif text-[26px] leading-none">Yes, If</p>
          </div>
          <ul className="mt-6 space-y-4 pl-10 md:pl-0">
            {yes.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[15px] leading-[1.6] text-cream/85"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 select-none text-cognac-light"
                >
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3 text-cream/55">
            <FogIcon className="h-7 w-7" />
            <p className="font-serif text-[26px] leading-none text-cream/85">
              Not Yet, If
            </p>
          </div>
          <ul className="mt-6 space-y-4 pl-10 md:pl-0">
            {notYet.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[15px] leading-[1.6] text-cream/70"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 select-none text-cream/55"
                >
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 8. Team Preview ---------- */
/**
 * Compact teaser of the full /team roster. Smaller portrait squares
 * (~140px), name + role only (no bio), and a centered "Meet The Team"
 * link below the row that routes to /team.
 */
export function TeamPreview() {
  return (
    <Section id="team" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Team</SectionEyebrow>
        <SectionHeading bg="cream">The Team</SectionHeading>
      </div>
      <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[140px]">
              <PortraitSwap photo={member.photo} marine={member.marine} alt={member.name} />
            </div>
            <p className="mt-4 font-serif text-[16px] leading-snug text-navy">
              {member.name}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cognac/85">
              <RoleLabel role={member.role} />
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <a
          href="/team"
          className="group inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-cognac transition-colors duration-150 hover:text-cognac-deep"
        >
          Meet The Team
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </Section>
  );
}

/* ---------- 9. Final CTA ---------- */
export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative w-full overflow-hidden bg-navy py-32 text-cream md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: "url('/landing_page/Main Landing Page.webp')",
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
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-10">
        <SectionEyebrow bg="navy">Start Here</SectionEyebrow>
        <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.06] tracking-[-0.01em]">
          <span className="block font-normal text-cream">Build</span>
          <span className="mt-1 block font-bold text-cognac">
            Your AI Directory
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-cream/80">
          Every engagement begins with a conversation. Book a 30-minute call
          to talk through your team's situation.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/zptpartners/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-8 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Book A Call
          </a>
          <a
            href="/resources/zpt-one-pager.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[5px] border border-cream/85 px-8 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cream hover:text-navy"
          >
            Download The One-Pager
          </a>
        </div>
      </div>
    </section>
  );
}
