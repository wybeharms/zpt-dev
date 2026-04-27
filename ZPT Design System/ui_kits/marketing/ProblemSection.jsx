const ProblemSection = () => {
  const [dotCount, setDotCount] = React.useState(1);
  React.useEffect(() => {
    const id = setInterval(() => setDotCount((c) => (c % 3) + 1), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-8 py-24" style={{ backgroundColor: "#EAE8DE" }}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-light tracking-tight text-navy">
          Every week, new AI concepts land:{" "}
          <strong>Skills</strong>, <strong>MCPs</strong>,{" "}
          <strong>Plugins</strong>, <strong>CLIs</strong>.
        </h2>
        <p className="mt-4">
          <span className="breathe text-2xl font-semibold text-gold">
            It's overwhelming
            <span className="inline-block w-[1.2em] text-left">
              {".".repeat(dotCount)}
            </span>
          </span>
        </p>

        {/* headline collage — rendered as warm-border tiles */}
        <div className="relative mx-auto mt-8 hidden h-[160px] max-w-lg sm:block">
          {[
            { label: "Anthropic's new AI tool sends shudders through software stocks", source: "CNN", style: { left: 0, top: 0, width: "46%", transform: "rotate(-1.5deg)" } },
            { label: "OpenAI adds powerful but dangerous support for MCP", source: "Axios", style: { right: 0, top: 0, width: "42%", transform: "rotate(1deg)" } },
            { label: "Google launches CLI for AI agents", source: "The Verge", style: { left: "50%", top: "50%", width: "42%", transform: "translate(-50%, -50%) rotate(-0.5deg)", zIndex: 10 } },
            { label: "Anthropic announces Claude plug-ins to automate HR & banking", source: "Bloomberg", style: { bottom: 0, left: "2%", width: "44%", transform: "rotate(0.5deg)" } },
            { label: "AI disruption fears deepen after Anthropic targets legal teams", source: "Morningstar", style: { bottom: 0, right: 0, width: "40%", transform: "rotate(-1deg)" } },
          ].map((h, i) => (
            <div
              key={i}
              className="absolute rounded border border-border-warm bg-white p-2 text-left shadow-sm"
              style={h.style}
            >
              <div className="text-[8px] font-semibold uppercase tracking-wider text-text-muted">{h.source}</div>
              <div className="mt-0.5 text-[10px] font-semibold leading-tight text-navy">{h.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border-warm bg-white px-8 py-8 shadow-sm">
          <p className="text-lg font-semibold text-navy">ZPT simplifies this for you.</p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
            We configure AI tools like Claude Desktop, connect them to what
            you already use (Google Drive, email, spreadsheets, CRM), create
            skills for your workflows, and wire up the right integrations.
            Your team gets AI that actually knows how the company works.
          </p>
        </div>
      </div>
    </section>
  );
};

window.ProblemSection = ProblemSection;
