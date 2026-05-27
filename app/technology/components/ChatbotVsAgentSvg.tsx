/**
 * Chatbot vs Agent. Two side-by-side panels:
 *   LEFT (Chatbot): brain only — answers questions and stops.
 *   RIGHT (Agent):  brain + tool, connected by an orchestrating curve.
 *                   Harness caption beneath identifies the runtime.
 *
 * Each panel is wrapped in a <g className="group"> so :hover propagates
 * from any child (rect, text, icon) up to the group, and the visible bg
 * rect colors via Tailwind's group-hover variant. Without the group the
 * rect only colors when the cursor is on its empty area, and reverts
 * the moment the cursor moves over an icon or text element.
 *
 * Brain and Tool icons are inlined as SVG paths (rather than imported
 * components) so they render correctly inside the parent <svg> without
 * needing nested-SVG width/height plumbing.
 *
 * The viewBox is wider than strictly needed for the panels so the
 * "Harness:" caption (long, tracked uppercase) has horizontal room
 * without being clipped by the SVG bounds.
 */
export default function ChatbotVsAgentSvg() {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      <svg
        viewBox="0 0 640 380"
        className="block w-full"
        role="img"
        aria-label="Diagram: a chatbot is just the brain. An agent is the brain plus tools, orchestrated by a harness like Claude Desktop, Codex, or Microsoft Copilot Cowork."
      >
        {/* ============== LEFT PANEL: CHATBOT ============== */}
        <g className="group">
          {/* Visible bg rect, drawn first so text/icons paint on top.
              group-hover swaps to a cognac-tinted cream when hover fires
              on any child of the group. */}
          <rect
            x="82"
            y="20"
            width="196"
            height="310"
            rx="10"
            stroke="currentColor"
            strokeWidth="1"
            className="text-navy/15 fill-[#F4ECDE] group-hover:fill-[#E5D3B8] transition-colors duration-200"
          />
          <text
            x="180"
            y="56"
            textAnchor="middle"
            style={{
              font: '500 11px var(--font-sans, sans-serif)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/55"
          >
            Chatbot
          </text>

          {/* Brain disc (filled navy) */}
          <circle cx="180" cy="140" r="34" className="fill-navy" />
          <g
            transform="translate(160 120) scale(1.25)"
            stroke="currentColor"
            strokeWidth="1.2"
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

          <text
            x="180"
            y="232"
            textAnchor="middle"
            style={{
              font: '500 14px var(--font-sans, sans-serif)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/85"
          >
            Brain Only
          </text>
          <text
            x="180"
            y="270"
            textAnchor="middle"
            style={{
              font: 'italic 16px var(--font-serif, serif)',
            }}
            className="fill-navy/70"
          >
            Answers questions
          </text>
          <text
            x="180"
            y="294"
            textAnchor="middle"
            style={{
              font: 'italic 16px var(--font-serif, serif)',
            }}
            className="fill-navy/70"
          >
            and stops.
          </text>
        </g>

        {/* ============== RIGHT PANEL: AGENT ============== */}
        <g className="group">
          <rect
            x="362"
            y="20"
            width="196"
            height="310"
            rx="10"
            stroke="currentColor"
            strokeWidth="1"
            className="text-navy/15 fill-[#F4ECDE] group-hover:fill-[#E5D3B8] transition-colors duration-200"
          />
          <text
            x="460"
            y="56"
            textAnchor="middle"
            style={{
              font: '500 11px var(--font-sans, sans-serif)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/55"
          >
            Agent
          </text>

          {/* Connecting curve between the two discs (cognac, drawn first
              so the discs cover its endpoints) */}
          <path
            d="M 430 140 Q 460 118, 490 140"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            className="text-cognac"
          />

          {/* Brain disc + icon */}
          <circle cx="420" cy="140" r="32" className="fill-navy" />
          <g
            transform="translate(402 122) scale(1.13)"
            stroke="currentColor"
            strokeWidth="1.3"
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

          {/* Tool disc + icon */}
          <circle cx="500" cy="140" r="32" className="fill-navy" />
          <g
            transform="translate(482 122) scale(1.13)"
            stroke="currentColor"
            strokeWidth="1.3"
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

          {/* Mini "Brain" + "Hands" labels under each disc */}
          <text
            x="420"
            y="192"
            textAnchor="middle"
            style={{
              font: '500 10px var(--font-sans, sans-serif)',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/55"
          >
            Brain
          </text>
          <text
            x="500"
            y="192"
            textAnchor="middle"
            style={{
              font: '500 10px var(--font-sans, sans-serif)',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/55"
          >
            Hands
          </text>

          <text
            x="460"
            y="232"
            textAnchor="middle"
            style={{
              font: '500 14px var(--font-sans, sans-serif)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
            className="fill-navy/85"
          >
            Model + Tools
          </text>
          <text
            x="460"
            y="270"
            textAnchor="middle"
            style={{
              font: 'italic 16px var(--font-serif, serif)',
            }}
            className="fill-navy/70"
          >
            Reads files, runs queries,
          </text>
          <text
            x="460"
            y="294"
            textAnchor="middle"
            style={{
              font: 'italic 16px var(--font-serif, serif)',
            }}
            className="fill-navy/70"
          >
            updates records.
          </text>
        </g>

        {/* Caption beneath both panels — names the harness runtimes.
            HARNESS is bold; the runtime list reads as a regular caption.
            Sits outside both group wrappers so hovering the caption
            never tints a panel. */}
        <text
          x="320"
          y="362"
          textAnchor="middle"
          style={{
            font: '500 13px var(--font-sans, sans-serif)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
          className="fill-navy/75"
        >
          <tspan style={{ fontWeight: 700 }}>Harness:</tspan>
          <tspan> Claude Desktop · Codex · Copilot Cowork</tspan>
        </text>
      </svg>
    </div>
  );
}
