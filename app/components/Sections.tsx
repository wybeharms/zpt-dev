import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";

type Bg = "cream" | "navy";

function Section({
  id,
  bg,
  children,
  className = "",
}: {
  id: string;
  bg: Bg;
  children: ReactNode;
  className?: string;
}) {
  const palette =
    bg === "cream" ? "bg-cream text-navy" : "bg-navy text-cream";
  return (
    <section
      id={id}
      className={`relative w-full ${palette} py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">{children}</div>
    </section>
  );
}

function SectionEyebrow({
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

function SectionHeading({
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
export function TrustedBy() {
  const clients = [
    "Marquette",
    "CFA Society",
    "New Vintage",
    "MDV Design",
    "Brutalia",
  ];
  return (
    <Section id="trusted-by" bg="cream" className="py-16 md:py-20">
      <p className="mb-10 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-cognac">
        Trusted By
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
        {clients.map((name) => (
          <li
            key={name}
            className="font-serif text-[20px] tracking-[0.01em] text-navy md:text-[22px]"
          >
            {name}
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
      copy: "A hands-on session for your leadership and operating team. Your team leaves understanding what AI can and cannot do for the work they already run.",
    },
    {
      number: "02",
      label: "Discovery",
      copy: "On-site mapping of your real workflows. We surface the highest-leverage opportunities to automate.",
    },
    {
      number: "03",
      label: "Build",
      copy: "We build the workflows your team runs every day. Your team uses them through Claude, Codex, or any compatible AI app, and you own everything we deliver.",
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
          <p className="mt-6 text-[17px] leading-[1.7] text-cream/85">
            Every company is different. ZPT meets your team where you are.
            Engagements range from a half-day education session to a full
            multi-workflow build, sized to where your team is ready. Three
            steps anchor the work.
          </p>

          <ul className="mt-6 border-t border-cream/15">
            {steps.map((step) => (
              <li
                key={step.label}
                className="border-b border-cream/15"
              >
                <RevealOnScroll className="grid grid-cols-[64px_minmax(0,1fr)] gap-6 py-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10 md:py-5">
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
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. How We Work ---------- */
export function HowWeWork() {
  const types = [
    {
      label: "Education Workshop",
      copy: "Half- or full-day session for leadership teams who want to learn before they build.",
    },
    {
      label: "Discovery",
      copy: "One to two days mapping workflows and shipping a first proof of concept.",
    },
    {
      label: "Focused Build",
      copy: "Two to three days automating one or two well-defined workflows end to end.",
    },
    {
      label: "Comprehensive",
      copy: "Four or more days of full discovery followed by a multi-workflow build.",
    },
    {
      label: "Embedded",
      copy: "Ongoing weekly or monthly sessions that grow the directory over time.",
    },
  ];
  return (
    <Section id="how-we-work" bg="cream">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-20">
        <div>
          <SectionEyebrow bg="cream">Engagement Types</SectionEyebrow>
          <SectionHeading bg="cream">How We Work</SectionHeading>
        </div>
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {types.map((t) => (
            <li
              key={t.label}
              className="grid gap-2 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
            >
              <span className="font-serif text-[20px] leading-snug text-navy">
                {t.label}
              </span>
              <span className="text-[16px] leading-[1.65] text-navy/75">
                {t.copy}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- 5. Watch ZPT in Action ---------- */
export function WatchZpt() {
  return (
    <Section id="watch" bg="navy">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow bg="navy">Preview</SectionEyebrow>
        <SectionHeading bg="navy">Watch ZPT in Action</SectionHeading>
        <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.65] text-cream/75">
          A short introduction to what ZPT builds and how your team runs it.
        </p>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-[5px] border border-cream/15 bg-[#08081c]">
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-cream/55">
              Video Walkthrough Coming Soon
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 6. Why ZPT ---------- */
function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="12.5" />
      <polygon points="16,7 19,16 16,25 13,16" />
    </svg>
  );
}

function SextantIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 24 L27 24 L16 6 Z" />
      <path d="M9 24 A 7 7 0 0 1 23 24" />
      <line x1="16" y1="14" x2="20" y2="11" />
    </svg>
  );
}

function SailboatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="16" y1="5" x2="16" y2="22" />
      <path d="M16 8 L9 22 L23 22 Z" />
      <path d="M4 24 L28 24 L25 28 L7 28 Z" />
    </svg>
  );
}

export function WhyZpt() {
  const blocks = [
    {
      Icon: CompassIcon,
      lead: "Track Record Across Industries.",
      copy: "Custom Claude, Codex, and Copilot setups shipped across investment consulting, private equity, secondaries, design, and hospitality. After 100+ conversations with leaders adopting AI, most of the wrong turns are already mapped. Depth is the moat your team inherits.",
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
            <p className="mt-4 text-[16px] leading-[1.65] text-navy/75">
              {copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 7. Is ZPT Right for Your Company ---------- */
function AnchorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="6" r="2" />
      <line x1="16" y1="8" x2="16" y2="26" />
      <line x1="11" y1="13" x2="21" y2="13" />
      <path d="M6 22 A 10 10 0 0 0 26 22" />
    </svg>
  );
}

function FogIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="11" x2="27" y2="11" />
      <line x1="3" y1="17" x2="25" y2="17" />
      <line x1="7" y1="23" x2="29" y2="23" />
    </svg>
  );
}

export function IsZptRight() {
  const yes = [
    "You have repeatable workflows worth codifying.",
    "Your team is open to working alongside agents.",
    "You want ownership, not subscription.",
    "You want a working system, not a recommendation.",
  ];
  const notYet = [
    "You want a chatbot.",
    "You haven't decided what to automate.",
    "You expect ZPT to run the workflows for your team.",
    "You're looking for a one-time install with no follow-on.",
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
          <ul className="mt-6 space-y-4 pl-10">
            {yes.map((line) => (
              <li
                key={line}
                className="text-[16px] leading-[1.6] text-cream/85"
              >
                {line}
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
          <ul className="mt-6 space-y-4 pl-10">
            {notYet.map((line) => (
              <li
                key={line}
                className="text-[16px] leading-[1.6] text-cream/70"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 8. Team Preview (basic stub) ---------- */
export function TeamPreview() {
  const team = [
    { name: "Wybe Harms", role: "Founder" },
    { name: "Team Member 2", role: "Forward-Deployed Engineer" },
    { name: "Team Member 3", role: "Forward-Deployed Engineer" },
    { name: "Team Member 4", role: "Forward-Deployed Engineer" },
    { name: "Team Member 5", role: "Forward-Deployed Engineer" },
  ];
  return (
    <Section id="team" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Team</SectionEyebrow>
        <SectionHeading bg="cream">Team Preview</SectionHeading>
      </div>
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
        {team.map((member) => (
          <li key={member.name} className="border-t border-navy/15 pt-5">
            <p className="font-serif text-[20px] leading-snug text-navy">
              {member.name}
            </p>
            <p className="mt-1 text-[14px] tracking-wide text-navy/65">
              {member.role}
            </p>
          </li>
        ))}
      </ul>
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
        <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.65] text-cream/80">
          Every engagement begins with a conversation. Book a 30-minute call
          to talk through your team's situation.
        </p>
        <div className="mt-10">
          <a
            href="mailto:wybe@zptpartners.com"
            className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-9 py-4 text-[16px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
