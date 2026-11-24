/**
 * The three ZPT services, Setup → Build → Retainer, stacked as filled
 * cards in the left column of the Our Approach section. Each card has a
 * number, the service name, a short tag (how long or how often) and one
 * line of copy. A small arrow between cards shows the order, and Build
 * carries an "Optional" label because a client can go straight from
 * Setup to a Retainer. The detail lives on /how-it-works. A portal note
 * closes the list because every engagement includes portal access.
 * Prices stay off the public site.
 *
 * Service model per business/company-context/pricing.md (November 23rd,
 * 2026): education and onboarding sit within Setup, not as separate
 * offers.
 */
type Service = {
  number: string;
  name: string;
  tag: string;
  copy: string;
  optional?: boolean;
};

const SERVICES: Service[] = [
  {
    number: "01",
    name: "Setup",
    tag: "One to two days",
    copy: "We teach your team to use agents in their own work and set up the shared folder, instructions and company context.",
  },
  {
    number: "02",
    name: "Build",
    tag: "Scoped per project",
    copy: "We build the workflows you choose, test them with the people who use them, and hand them over.",
    optional: true,
  },
  {
    number: "03",
    name: "Retainer",
    tag: "Monthly",
    copy: "Ongoing support, fixes and small improvements, with a monthly folder review and a written recap.",
  },
];

export default function OurApproachPackages() {
  return (
    <div>
      <ol>
        {SERVICES.map((service, i) => (
          <li key={service.name}>
            {i > 0 ? (
              <span
                aria-hidden="true"
                className="flex h-7 items-center justify-center text-[15px] leading-none text-cognac-light/70"
              >
                ↓
              </span>
            ) : null}
            <div className="group rounded-xl border border-cognac-light/30 bg-cream/[0.06] px-5 py-5 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.6)] transition duration-200 hover:-translate-y-0.5 hover:border-cognac-light/60 hover:bg-cream/[0.09] md:px-6">
              {/* Tag sits under the name on narrow columns and moves to
                  the right of it from lg up. */}
              <div className="lg:flex lg:items-baseline lg:justify-between lg:gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-[16px] text-cognac-light">
                    {service.number}
                  </span>
                  <p className="font-serif text-[26px] leading-snug text-cream md:text-[28px]">
                    {service.name}
                  </p>
                  {service.optional ? (
                    <span className="self-center rounded-full border border-cognac-light/50 px-2.5 py-[3px] text-[10.5px] font-medium uppercase tracking-[0.14em] text-cognac-light">
                      Optional
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-cognac-light/90 lg:mt-0">
                  {service.tag}
                </p>
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-cream/80 transition-colors duration-200 group-hover:text-cream">
                {service.copy}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-[13.5px] leading-[1.6] text-cream/60">
        <span className="font-medium text-cream/85">
          Every engagement includes the ZPT Portal:
        </span>{" "}
        the course, best practices and your setup.
      </p>
    </div>
  );
}
