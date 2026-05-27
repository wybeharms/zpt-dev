/**
 * Compass alignment diagram for the Tools Setup section.
 * Left: five compass roses with needles pointing in different directions.
 * Right: five compasses with needles aligned to north.
 * Conveys "different starting points, same destination" without
 * scattered-ships imagery, which read as too random.
 *
 * The two sets are styled differently so the "aligned" state reads as
 * the resolved outcome: bigger fill, stronger stroke, brighter cream
 * (vs the cognac-light + lower opacity of the day-one set). Cream on
 * navy is the strongest contrast available in the palette, so the
 * "arrived" moment lands at a glance.
 */

const leftAngles = [-65, 38, -125, 152, -22];
const compassPositions = [52, 104, 156, 208, 260];
const RIGHT_OFFSET = 340;
const COMPASS_Y = 65;
const CAPTION_Y = 124;

function CompassRose({
  angle,
  aligned = false,
}: {
  angle: number;
  aligned?: boolean;
}) {
  // Aligned compasses pop: stronger stroke, denser needle, plus a much
  // brighter currentColor inherited from a wrapping <g className="text-cream">.
  // Cream on navy is a far bigger jump than cognac vs cognac-light,
  // which read as the same warm brown at this size.
  const rimOpacity = aligned ? 0.9 : 0.5;
  const rimWidth = aligned ? 1.6 : 1.2;
  const centerOpacity = aligned ? 1 : 0.7;
  const needleOpacity = aligned ? 1 : 0.85;
  const tickOpacity = aligned ? 0.9 : 0.5;
  // A slightly fatter needle when aligned reads as "resolved" without
  // throwing the proportions off.
  const needlePath = aligned
    ? "M 0 -16 L 5 0 L 0 16 L -5 0 Z"
    : "M 0 -15 L 4 0 L 0 15 L -4 0 Z";

  return (
    <g>
      <circle
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth={rimWidth}
        opacity={rimOpacity}
      />
      <circle r="2.5" fill="currentColor" opacity={centerOpacity} />
      {/* North tick on the rim */}
      <line
        x1="0"
        y1="-22"
        x2="0"
        y2="-17"
        stroke="currentColor"
        strokeWidth={rimWidth}
        opacity={tickOpacity}
      />
      {/* Needle: filled diamond, rotated to angle */}
      <g transform={`rotate(${angle})`}>
        <path d={needlePath} fill="currentColor" fillOpacity={needleOpacity} />
      </g>
    </g>
  );
}

export default function CompassAlignment() {
  // Caption x = horizontal center of each compass group.
  const leftCenter =
    (compassPositions[0] + compassPositions[compassPositions.length - 1]) / 2;
  const rightCenter = leftCenter + RIGHT_OFFSET;

  return (
    <div className="mx-auto w-full max-w-[760px] text-cognac-light">
      <svg
        viewBox="0 0 660 145"
        className="block w-full"
        role="img"
        aria-label="Diagram: on day one, five compasses point in different directions. After the engagement, all five compasses are aligned to north."
      >
        {/* Left set: five scattered compasses, muted. */}
        {compassPositions.map((cx, i) => (
          <g key={`l-${i}`} transform={`translate(${cx} ${COMPASS_Y})`}>
            <CompassRose angle={leftAngles[i]} />
          </g>
        ))}
        <text
          x={leftCenter}
          y={CAPTION_Y}
          textAnchor="middle"
          style={{
            font: '500 11px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-cognac-light/80"
        >
          Day one
        </text>

        {/* Arrow in the middle */}
        <g
          transform={`translate(290 ${COMPASS_Y})`}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="0" y1="0" x2="50" y2="0" />
          <path d="M 42 -6 L 50 0 L 42 6" />
        </g>

        {/* Right set: five aligned compasses. Wrapped in a <g> with
            cream as currentColor so the rim, dot, tick, and needle all
            inherit a much brighter fill/stroke than the day-one set's
            muted cognac-light. Cream vs cognac-light on navy is the
            highest-contrast pairing in the palette. */}
        <g className="text-cream">
          {compassPositions.map((cx, i) => (
            <g
              key={`r-${i}`}
              transform={`translate(${cx + RIGHT_OFFSET} ${COMPASS_Y})`}
            >
              <CompassRose angle={0} aligned />
            </g>
          ))}
          <text
            x={rightCenter}
            y={CAPTION_Y}
            textAnchor="middle"
            style={{
              font: '600 11px var(--font-sans, sans-serif)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
            className="fill-cream"
          >
            Aligned
          </text>
        </g>
      </svg>
    </div>
  );
}
