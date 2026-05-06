/**
 * Three Parts of An Agent diagram.
 *
 * Top card (AGENT): rounded outline containing a Brain disc and a Hands
 * disc connected by a cognac curve. Harness caption beneath identifies
 * the runtime (Claude Desktop, Codex, Microsoft Copilot Cowork).
 *
 * Bottom card: brief "Your Company Folder" card with a folder icon and
 * a one-line storage hint (local, SharePoint, Dropbox, etc.). It only
 * teases the folder concept; the deeper story lives in /technology's
 * "Where It Lives" section below.
 *
 * Brain, Tool, and Folder icons are inlined as SVG paths so they render
 * directly inside the parent <svg> coordinate system.
 */
export default function HarnessSvg() {
  return (
    <div className="mx-auto w-full max-w-[720px]">
      <svg
        viewBox="0 0 720 510"
        className="block w-full"
        role="img"
        aria-label="Diagram: an agent card containing a Brain disc and a Hands disc connected by a curve, with a harness caption (Claude Desktop, Codex, Microsoft Copilot Cowork). A chevron points down to a folder card that says 'Your Company Folder — Local, SharePoint, Dropbox, GitHub, Drive'."
      >
        {/* ============= AGENT CARD ============= */}
        <rect
          x="80"
          y="20"
          width="560"
          height="240"
          rx="14"
          fill="#F4ECDE"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-navy/85"
        />

        {/* AGENT eyebrow at top of card */}
        <text
          x="360"
          y="54"
          textAnchor="middle"
          style={{
            font: '500 12px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-navy/65"
        >
          Agent
        </text>

        {/* Connecting curve between brain and hands */}
        <path
          d="M 260 132 Q 360 97, 460 132"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          className="text-cognac"
        />

        {/* ----- Brain disc + icon ----- */}
        <circle cx="260" cy="132" r="38" className="fill-navy" />
        <g
          transform="translate(236 108) scale(1.5)"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cream"
        >
          <path d="M 16 5 C 13.5 5, 12 6.5, 12 8 C 9.5 8, 8 10, 8 12 C 6 12.5, 5.5 14.5, 6.5 16 C 5.5 17.5, 6 19.5, 8 20 C 8 22, 9.5 24, 12 24 C 12 25.5, 13.5 27, 16 27 C 18.5 27, 20 25.5, 20 24 C 22.5 24, 24 22, 24 20 C 26 19.5, 26.5 17.5, 25.5 16 C 26.5 14.5, 26 12.5, 24 12 C 24 10, 22.5 8, 20 8 C 20 6.5, 18.5 5, 16 5 Z" />
          <path d="M 16 5 C 15.5 12, 15.5 20, 16 27" />
          <path d="M 9 13 C 11 13.5, 11 15, 10 16" />
          <path d="M 10 19 C 12 19, 12.5 20.5, 12 22" />
          <path d="M 23 13 C 21 13.5, 21 15, 22 16" />
          <path d="M 22 19 C 20 19, 19.5 20.5, 20 22" />
        </g>

        {/* Brain label */}
        <text
          x="260"
          y="195"
          textAnchor="middle"
          style={{
            font: '500 14px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-navy/85"
        >
          Brain
        </text>

        {/* ----- Hands disc + icon ----- */}
        <circle cx="460" cy="132" r="38" className="fill-navy" />
        <g
          transform="translate(436 108) scale(1.5)"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cream"
        >
          <path d="M 11.5 4.5 L 14.5 7.5 L 11.5 10.5 L 8.5 10.5 L 6 8 L 6 4.5 Z" />
          <path d="M 12 10.5 L 24 22.5" />
          <path d="M 22 24.5 L 26 20.5 L 28 22.5 L 24 26.5 Z" />
          <circle cx="10" cy="7.5" r="1.2" />
        </g>

        {/* Hands label */}
        <text
          x="460"
          y="195"
          textAnchor="middle"
          style={{
            font: '500 14px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-navy/85"
        >
          Hands
        </text>

        {/* Harness caption inside the agent card. The word HARNESS is
            bolded for emphasis. */}
        <text x="360" y="240" textAnchor="middle">
          <tspan
            style={{
              font: 'italic 700 18px var(--font-serif, serif)',
            }}
            className="fill-navy/85"
          >
            Harness:
          </tspan>
          <tspan
            style={{
              font: 'italic 16px var(--font-serif, serif)',
            }}
            className="fill-navy/70"
          >
            {" "}Claude Desktop · Codex · Copilot Cowork
          </tspan>
        </text>

        {/* ============= CHEVRON DOWN ============= */}
        <g
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-navy/55"
        >
          <line x1="360" y1="275" x2="360" y2="305" />
          <path d="M 352 297 L 360 307 L 368 297" />
        </g>

        {/* ============= FOLDER CARD ============= */}
        <rect
          x="160"
          y="320"
          width="400"
          height="170"
          rx="12"
          fill="#F4ECDE"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-navy/65"
        />

        {/* Folder icon centered */}
        <g
          transform="translate(336 342) scale(1.5)"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cognac"
        >
          <path d="M 4 9 L 12 9 L 14 11 L 28 11 L 28 25 C 28 26, 27 27, 26 27 L 6 27 C 5 27, 4 26, 4 25 Z" />
        </g>

        {/* Folder label */}
        <text
          x="360"
          y="430"
          textAnchor="middle"
          style={{
            font: '500 18px var(--font-serif, serif)',
          }}
          className="fill-navy/85"
        >
          Your Company Folder
        </text>

        {/* Storage hint */}
        <text
          x="360"
          y="458"
          textAnchor="middle"
          style={{
            font: '400 13px var(--font-sans, sans-serif)',
            letterSpacing: '0.10em',
          }}
          className="fill-navy/65"
        >
          Local · SharePoint · Dropbox · GitHub · Drive
        </text>
      </svg>
    </div>
  );
}
