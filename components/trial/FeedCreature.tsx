"use client";

interface FeedCreatureProps {
  documentCount: number;
  isDragOver?: boolean;
}

export default function FeedCreature({ documentCount, isDragOver }: FeedCreatureProps) {
  const state = documentCount >= 3 ? 3 : documentCount;

  // Creature parameters by state
  const config = {
    0: { scale: 0.85, fillOpacity: 0, mouthPath: "M 38 58 Q 44 52 50 58", eyeR: 2.5, eyeSquint: false, glow: false },
    1: { scale: 0.9, fillOpacity: 0.3, mouthPath: "M 38 56 L 50 56", eyeR: 2.5, eyeSquint: false, glow: false },
    2: { scale: 0.95, fillOpacity: 0.5, mouthPath: "M 38 56 Q 44 60 50 56", eyeR: 2.5, eyeSquint: false, glow: false },
    3: { scale: 1, fillOpacity: 1, mouthPath: "M 36 54 Q 44 62 52 54", eyeR: 2, eyeSquint: true, glow: true },
  }[state]!;

  return (
    <div
      className="mb-2 flex flex-col items-center"
      style={{ transition: "transform 500ms ease-in-out", transform: `scale(${isDragOver ? 1.1 : 1})` }}
    >
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transition: "transform 500ms ease-in-out", transform: `scale(${config.scale})` }}
        className={config.glow ? "creature-glow" : ""}
      >
        {/* Body blob */}
        <ellipse
          cx="44"
          cy="46"
          rx="28"
          ry="26"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeDasharray={state === 0 ? "6 4" : "none"}
          fill="#C9A96E"
          style={{
            fillOpacity: config.fillOpacity,
            transition: "fill-opacity 500ms ease-in-out, stroke-dasharray 300ms ease-in-out",
          }}
        />

        {/* Eyes */}
        {config.eyeSquint ? (
          <>
            <path d="M 35 40 Q 37 38 39 40" stroke="#0C0C28" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 49 40 Q 51 38 53 40" stroke="#0C0C28" strokeWidth="2" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle
              cx="37"
              cy="40"
              r={config.eyeR}
              fill="#0C0C28"
              style={{ transition: "r 500ms ease-in-out" }}
            />
            <circle
              cx="51"
              cy="40"
              r={config.eyeR}
              fill="#0C0C28"
              style={{ transition: "r 500ms ease-in-out" }}
            />
          </>
        )}

        {/* Mouth */}
        <path
          d={config.mouthPath}
          stroke="#0C0C28"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{ transition: "d 500ms ease-in-out" }}
        />

        {/* Thought bubble (hungry state only) */}
        {state === 0 && (
          <g style={{ opacity: isDragOver ? 0 : 1, transition: "opacity 300ms ease-in-out" }}>
            {/* Bubble trail */}
            <circle cx="64" cy="30" r="2" fill="#C9A96E" fillOpacity="0.4" />
            <circle cx="68" cy="22" r="3" fill="#C9A96E" fillOpacity="0.4" />
            {/* Document icon in thought */}
            <rect x="72" y="8" width="12" height="16" rx="1.5" stroke="#C9A96E" strokeWidth="1.5" fill="none" opacity="0.6" />
            <line x1="75" y1="14" x2="81" y2="14" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
            <line x1="75" y1="17" x2="80" y2="17" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
          </g>
        )}
      </svg>
    </div>
  );
}
