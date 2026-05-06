/**
 * Compass alignment diagram for the Tools Setup section.
 * Left: five compass roses with needles pointing in different directions.
 * Right: five compasses with needles aligned to north.
 * Conveys "different starting points, same destination" without
 * scattered-ships imagery, which read as too random.
 */

const leftAngles = [-65, 38, -125, 152, -22];
const compassPositions = [52, 104, 156, 208, 260];
const RIGHT_OFFSET = 340;
const COMPASS_Y = 65;
const CAPTION_Y = 118;

function CompassRose({ angle }: { angle: number }) {
  return (
    <g>
      <circle
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <circle r="2" fill="currentColor" opacity="0.7" />
      {/* North tick on the rim */}
      <line
        x1="0"
        y1="-18"
        x2="0"
        y2="-14"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
      {/* Needle: filled diamond, rotated to angle */}
      <g transform={`rotate(${angle})`}>
        <path
          d="M 0 -13 L 4 0 L 0 13 L -4 0 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
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
        viewBox="0 0 660 140"
        className="block w-full"
        role="img"
        aria-label="Diagram: on day one, five compasses point in different directions. After the engagement, all five compasses are aligned to north."
      >
        {/* Left set: five scattered compasses */}
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
            font: '500 10px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-cognac-light/85"
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

        {/* Right set: five aligned compasses */}
        {compassPositions.map((cx, i) => (
          <g
            key={`r-${i}`}
            transform={`translate(${cx + RIGHT_OFFSET} ${COMPASS_Y})`}
          >
            <CompassRose angle={0} />
          </g>
        ))}
        <text
          x={rightCenter}
          y={CAPTION_Y}
          textAnchor="middle"
          style={{
            font: '500 10px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-cognac-light/85"
        >
          Aligned
        </text>
      </svg>
    </div>
  );
}
