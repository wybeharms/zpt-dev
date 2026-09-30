/**
 * The three ZPT packages, stacked as compact rows for the left column of
 * the Our Approach section. Each row carries a number, the package name
 * with a short tag beside it (who it is for or how long it takes), and
 * one punchy line of copy. Keep the copy to a line: the detail lives on
 * /how-it-works. A portal note closes the list because every package
 * includes portal access. Prices stay off the public site.
 */
type Package = {
  number: string;
  name: string;
  tag: string;
  copy: string;
};

const PACKAGES: Package[] = [
  {
    number: "01",
    name: "ZPT Onboarding",
    tag: "Per person, 45 minutes",
    copy: "Understand your architecture. Set up your first agent.",
  },
  {
    number: "02",
    name: "ZPT Discovery",
    tag: "Half a day, or a full day on-site",
    copy: "Understand and scope the workflows agents can run.",
  },
  {
    number: "03",
    name: "ZPT Build",
    tag: "Per workflow, over months",
    copy: "Build and test agents in production.",
  },
];

export default function OurApproachPackages() {
  return (
    <div>
      <ul className="border-t border-cream/15">
        {PACKAGES.map((pkg) => (
          <li
            key={pkg.name}
            className="group grid grid-cols-[32px_minmax(0,1fr)] border-b border-cream/15 py-5"
          >
            <span className="pt-[5px] font-serif text-[15px] text-cognac-light">
              {pkg.number}
            </span>
            <div>
              {/* Tag sits under the name on narrow columns and moves to
                  the right of it from lg up, where all three fit. */}
              <div className="lg:flex lg:items-baseline lg:justify-between lg:gap-4">
                <p className="font-serif text-[22px] leading-snug text-cream md:text-[24px]">
                  {pkg.name}
                </p>
                <p className="mt-0.5 text-[12.5px] italic text-cognac-light/90 lg:mt-0">
                  {pkg.tag}
                </p>
              </div>
              <p className="mt-1.5 text-[14.5px] leading-[1.55] text-cream/75 transition-colors duration-200 group-hover:text-cream/95">
                {pkg.copy}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[13.5px] leading-[1.6] text-cream/60">
        <span className="font-medium text-cream/85">
          Every package comes with the ZPT Portal:
        </span>{" "}
        the course, best practices, and your setup.
      </p>
    </div>
  );
}
