/**
 * Hover-swap portrait card. Each portrait file under /public/team/ is a
 * 1536×1024 (3:2) composite — professional half on the left, marine
 * half on the right. Each half is 768×1024 = 3:4 portrait.
 *
 * The wrapper uses `aspect-[3/4]` so it matches the natural half-aspect
 * exactly: a 3:2 source with `object-cover object-left` shows the left
 * 768 pixels (= the professional half) at full vertical extent inside a
 * 3:4 frame, with no cropping and no background bleed.
 *
 * Two stacked images cross-fade on hover: the professional half fades
 * out while the marine half fades in over 350ms. The global
 * prefers-reduced-motion rule in globals.css clamps that transition to
 * ~0 for users who opt out of motion (the swap still happens, it just
 * happens instantly).
 */
type Props = {
  src: string;
  alt: string;
};

export default function PortraitSwap({ src, alt }: Props) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-md border border-navy/10">
      {/* Professional half — default visible */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-[350ms] ease-out group-hover:opacity-0"
      />
      {/* Marine half — fades in on hover */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-100"
      />
    </div>
  );
}
