/**
 * Functional icons used inside the /technology agent diagrams.
 * Kept separate from MarineIcons so the marine vocabulary stays clean.
 *
 * All icons share the same baseProps as MarineIcons: viewBox 0 0 32 32,
 * fill="none", stroke="currentColor", strokeWidth 1.5. Use Tailwind
 * text-* utilities (e.g. text-cream, text-cognac) to color them.
 */

const baseProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Anatomical brain. Two hemispheres with a central fissure plus a
 * couple of sulci hints. Reads as "brain" at small sizes.
 */
export function BrainIcon({ className }: { className?: string }) {
  return (
    <svg {...baseProps} className={className}>
      {/* Outer brain outline (two-hemisphere silhouette) */}
      <path
        d="
          M 16 5
          C 13.5 5, 12 6.5, 12 8
          C 9.5 8, 8 10, 8 12
          C 6 12.5, 5.5 14.5, 6.5 16
          C 5.5 17.5, 6 19.5, 8 20
          C 8 22, 9.5 24, 12 24
          C 12 25.5, 13.5 27, 16 27
          C 18.5 27, 20 25.5, 20 24
          C 22.5 24, 24 22, 24 20
          C 26 19.5, 26.5 17.5, 25.5 16
          C 26.5 14.5, 26 12.5, 24 12
          C 24 10, 22.5 8, 20 8
          C 20 6.5, 18.5 5, 16 5 Z
        "
      />
      {/* Central fissure between hemispheres */}
      <path d="M 16 5 C 15.5 12, 15.5 20, 16 27" />
      {/* Sulci hints — left hemisphere */}
      <path d="M 9 13 C 11 13.5, 11 15, 10 16" />
      <path d="M 10 19 C 12 19, 12.5 20.5, 12 22" />
      {/* Sulci hints — right hemisphere */}
      <path d="M 23 13 C 21 13.5, 21 15, 22 16" />
      <path d="M 22 19 C 20 19, 19.5 20.5, 20 22" />
    </svg>
  );
}

/**
 * Wrench tool. Open hex socket at one end, curved handle to the other.
 * Used for the "Hands" concept (tools that DO things).
 */
export function ToolIcon({ className }: { className?: string }) {
  return (
    <svg {...baseProps} className={className}>
      {/* Wrench: hex socket head + handle curving to opposite corner */}
      <path
        d="
          M 11.5 4.5
          L 14.5 7.5
          L 11.5 10.5
          L 8.5 10.5
          L 6 8
          L 6 4.5
          Z
        "
      />
      {/* Connecting bend from head to handle */}
      <path d="M 12 10.5 L 24 22.5" />
      {/* Handle tip (perpendicular cap) */}
      <path d="M 22 24.5 L 26 20.5 L 28 22.5 L 24 26.5 Z" />
      {/* Small inner hex hint */}
      <circle cx="10" cy="7.5" r="1.2" />
    </svg>
  );
}

/**
 * Simple folder with a tab. Used in the architecture and Where It Lives
 * sections to introduce "the agent lives in a folder".
 */
export function FolderIcon({ className }: { className?: string }) {
  return (
    <svg {...baseProps} className={className}>
      <path
        d="
          M 4 9
          L 12 9
          L 14 11
          L 28 11
          L 28 25
          C 28 26, 27 27, 26 27
          L 6 27
          C 5 27, 4 26, 4 25
          Z
        "
      />
    </svg>
  );
}

/**
 * Down-pointing chevron used between the agent card and the folder card.
 */
export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M 8 12 L 16 22 L 24 12" />
    </svg>
  );
}
