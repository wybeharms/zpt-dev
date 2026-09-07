/**
 * The three ZPT packages, stacked as compact rows for the left column of
 * the Our Approach section. Each row carries a number, the package name,
 * a short tag (who it is for or how long it takes), and one line of copy.
 * A portal note closes the list because every package includes portal
 * access. Prices stay off the public site.
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
    copy: "Your agent set up right, permissions done properly, a first folder built together, and the course to keep going.",
  },
  {
    number: "02",
    name: "ZPT Discovery",
    tag: "Half a day, or a full day on-site",
    copy: "ZPT sets the team up, builds the shared folder, and maps the workflows worth building first.",
  },
  {
    number: "03",
    name: "ZPT Build",
    tag: "Per workflow, over months",
    copy: "Workflows built one by one from the discovery list, each against success criteria agreed up front.",
  },
];

export default function OurApproachPackages() {
  return (
    <div>
      <ul className="border-t border-cream/15">
        {PACKAGES.map((pkg) => (
          <li
            key={pkg.name}
            className="group grid grid-cols-[32px_minmax(0,1fr)] border-b border-cream/15 py-5 md:py-6"
          >
            <span className="pt-[5px] font-serif text-[15px] text-cognac-light">
              {pkg.number}
            </span>
            <div>
              <p className="font-serif text-[22px] leading-snug text-cream md:text-[24px]">
                {pkg.name}
              </p>
              <p className="mt-1 text-[12.5px] italic text-cognac-light/90">
                {pkg.tag}
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-cream/70 transition-colors duration-200 group-hover:text-cream/90">
                {pkg.copy}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[13.5px] leading-[1.6] text-cream/60">
        <span className="font-medium text-cream/85">
          Every package comes with the ZPT Portal:
        </span>{" "}
        the course, best practices that stay current, and an overview of
        your own setup.
      </p>
    </div>
  );
}
