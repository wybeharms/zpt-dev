import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";
import PortraitSwap from "./PortraitSwap";
import YoutubeFacade from "./YoutubeFacade";
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
  return (
    <section
      id={id}
      className={`relative w-full ${bgClass} ${textColor} py-24 md:py-32 ${className}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={`mx-auto ${innerMax} px-6 md:px-10`}>{children}</div>
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
type TrustedLogo = {
  file: string;
  name: string;
  location: string;
  description: string;
  /** Set true when the source PNG has a lot of transparent padding
   *  around the actual mark, so the logo needs to render at a larger
   *  height to read at the same visual weight as the others. */
  emphasis?: boolean;
};

const TRUSTED_LOGOS: TrustedLogo[] = [
  {
    file: "/testimonials/marquette_associates.png",
    name: "Marquette Associates",
    location: "Chicago, USA",
    description: "Top-five US investment consultant",
    emphasis: true,
  },
  {
    file: "/testimonials/new_vintage_partners.png",
    name: "New Vintage Partners",
    location: "New York, USA",
    description: "Specialist venture secondaries fund",
  },
  {
    file: "/testimonials/CFA_Institute.png",
    name: "CFA Society",
    location: "Istanbul, Turkey",
    description: "Global professional body for CFA charterholders",
  },
  {
    file: "/testimonials/mdv_design.png",
    name: "MDV Design",
    location: "New York, USA",
    description: "Manhattan-based luxury interior design studio",
  },
  {
    file: "/testimonials/brutalia.png",
    name: "Brutalia",
    location: "Barcelona, Spain",
    description: "Fastest-growing pasta chain in Spain",
  },
];

/**
 * Single logo card. Group-hover reveals the description below the firm
 * name + location (opacity 0 → 1 over 200ms). The card sits inside a
 * marquee track, but it's also used in the static reduced-motion
 * fallback row, so it stays self-contained.
 *
 * The logo slot is fixed-height with items-center so all cards have
 * their text rows starting at the same y-coordinate, regardless of how
 * tall or short each individual logo image is. Logos with the
 * `emphasis` flag (e.g. Marquette, whose source PNG has lots of
 * transparent padding) render taller inside the same slot.
 */
function TrustedLogoCard({ logo }: { logo: TrustedLogo }) {
  const imgClass = logo.emphasis
    ? "h-14 w-auto max-w-[180px] object-contain md:h-20"
    : "h-12 w-auto max-w-[160px] object-contain md:h-14";
  return (
    <div className="group flex w-[200px] flex-shrink-0 flex-col items-center px-6 text-center">
      <div className="flex h-14 items-center justify-center md:h-20">
        <img src={logo.file} alt={logo.name} className={imgClass} />
      </div>
      <p className="mt-7 text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
        {logo.name}
      </p>
      <p className="mt-1 text-[12px] tracking-wide text-navy/55">
        {logo.location}
      </p>
      <p className="mt-1.5 text-[12px] leading-[1.4] text-navy/65 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {logo.description}
      </p>
    </div>
  );
}

export function TrustedBy() {
  // Two copies of the logo row inside the marquee track for a seamless
  // loop. Keys are namespaced by index so React doesn't complain about
  // duplicate names across the two halves.
  const trackLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <Section id="trusted-by" bg="cream" className="py-16 md:py-20">
      <p className="mb-10 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-cognac">
        Trusted By
      </p>

      {/* Marquee — default. Hidden when the user prefers reduced motion. */}
      <div
        className="marquee-wrapper relative overflow-hidden motion-reduce:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max">
          {trackLogos.map((logo, i) => (
            <TrustedLogoCard key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Static fallback — shown only when the user prefers reduced motion. */}
      <ul className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-6 motion-reduce:flex">
        {TRUSTED_LOGOS.map((logo) => (
          <li key={logo.name}>
            <TrustedLogoCard logo={logo} />
          </li>
        ))}
      </ul>
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
    <section
      id="our-approach"
      className="relative w-full bg-navy py-20 text-cream md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-[860px]">
          <SectionEyebrow bg="navy">How We Help</SectionEyebrow>
          <SectionHeading bg="navy">Our Approach</SectionHeading>
          <p className="mt-6 text-[16px] leading-[1.7] text-cream/85">
            Every company is different. ZPT meets your team where you are.
            Engagements range from a half-day education session to a full
            multi-workflow build, sized to where your team is ready. Three
            steps anchor the work.
          </p>

          <ul className="mt-6 border-t border-cream/15">
            {steps.map((step) => (
              <li
                key={step.label}
                className="border-b border-cream/15 transition-colors duration-200 hover:bg-cognac/[0.10]"
              >
                <RevealOnScroll className="grid grid-cols-[64px_minmax(0,1fr)] gap-6 px-3 py-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10 md:px-5 md:py-5">
                  <span
                    aria-hidden="true"
                    className="select-none font-serif text-[28px] leading-none text-cognac-light md:text-[32px]"
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="font-serif text-[22px] leading-snug text-cream md:text-[24px]">
                      {step.label}
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.65] text-cream/75">
                      {step.copy}
                    </p>
                  </div>
                </RevealOnScroll>
              </li>
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
      </div>
    </section>
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
      Icon: CompassIcon,
      lead: "Track Record Across Industries.",
      copy: "We've engaged with firms across financial services, design, and hospitality, from boutique studios to top-tier consultants. After 100+ conversations with leaders adopting AI, the wrong turns are already mapped. That experience comes with every engagement.",
    },
    {
      Icon: SextantIcon,
      lead: "Built by Practitioners.",
      copy: "ZPT originated out of a software company that lives and breathes AI. We test every new tool as it ships and know first-hand how they reshape how teams operate. That experience comes directly to your team, in production form.",
    },
    {
      Icon: SailboatIcon,
      lead: "Start Small, No Commitment.",
      copy: "Every engagement is low risk by design. Even when a workflow is only partially automatable, what we build becomes a foundation the team grows over time. The setup is AI agnostic and nothing is locked in.",
    },
  ];
  return (
    <Section id="why-zpt" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proven</SectionEyebrow>
        <SectionHeading bg="cream">Why ZPT</SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {blocks.map(({ Icon, lead, copy }) => (
          <div key={lead}>
            <Icon className="mb-3 h-8 w-8 text-cognac" />
            <h3 className="font-serif text-[22px] leading-snug text-navy">
              {lead}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-navy/75">
              {copy}
            </p>
          </div>
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
    "You're a heavily regulated organization.",
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
          <ul className="mt-6 space-y-4">
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
          <ul className="mt-6 space-y-4">
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
              <PortraitSwap src={member.portrait} alt={member.name} />
            </div>
            <p className="mt-4 font-serif text-[16px] leading-snug text-navy">
              {member.name}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cognac/85">
              {member.role}
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
          backgroundImage: "url('/landing_page/Main Landing Page.png')",
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
        <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-cream">
          Build Your AI Directory
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
