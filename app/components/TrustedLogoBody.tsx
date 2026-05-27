export type TrustedLogo = {
  file: string;
  name: string;
  location: string;
  description: string;
  /** Set true when the source PNG has a lot of transparent padding
   *  around the actual mark, so the logo needs to render at a larger
   *  height to read at the same visual weight as the others. */
  emphasis?: boolean;
};

/**
 * Visual body shared between the desktop marquee card (Sections.tsx,
 * server component) and the mobile tap card (TrustedLogoTapCard.tsx,
 * client component). Living in its own file means both call sites
 * import the same source of truth, so a change to the body markup
 * only needs to happen once.
 *
 * The logo slot is fixed-height with items-center so all cards have
 * their text rows starting at the same y-coordinate, regardless of
 * how tall or short each individual logo image is. The `size` tier
 * controls the rendered height inside that fixed slot.
 *
 * `descriptionVisible` controls the description independently of any
 * hover state, used by the mobile tap-toggle. The desktop wrapper
 * still drives reveal via `:group-hover`, layered on top.
 *
 * Presentational only (no state, no client APIs) so it is safe to
 * import from both server and client components.
 */
const SIZE_CLASSES: Record<NonNullable<TrustedLogo["size"]>, string> = {
  sm: "h-10 w-auto max-w-[140px] object-contain md:h-12",
  md: "h-12 w-auto max-w-[160px] object-contain md:h-14",
  lg: "h-20 w-auto max-w-[220px] object-contain md:h-28",
};

export default function TrustedLogoBody({
  logo,
  descriptionVisible = false,
}: {
  logo: TrustedLogo;
  descriptionVisible?: boolean;
}) {
  const imgClass = SIZE_CLASSES[logo.size ?? "md"];
  return (
    <div className="flex w-[200px] flex-shrink-0 flex-col items-center px-6 text-center">
      {/* Slot is tall enough to fully contain the largest size tier
          (md:h-28) so the text row below stays at the same y for every
          card regardless of which logo is shown. */}
      <div className="flex h-20 items-center justify-center md:h-28">
        <img src={logo.file} alt={logo.name} className={imgClass} />
      </div>
      <p className="mt-7 min-h-[36px] text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
        {logo.name}
      </p>
      <p className="mt-1 text-[12px] tracking-wide text-navy/55">
        {logo.location}
      </p>
      <p
        className={`mt-1.5 text-[12px] italic leading-[1.4] text-navy/65 transition-opacity duration-200 group-hover:opacity-100 ${
          descriptionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {logo.description}
      </p>
    </div>
  );
}
