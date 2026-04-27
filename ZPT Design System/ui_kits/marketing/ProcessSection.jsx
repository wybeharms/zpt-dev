/* Process (How We Work) — recreates the 4 animated step visuals */

const DiscoveryVisual = ({ active }) => {
  const items = [
    { text: "Sales pipeline workflow", dept: "Sales" },
    { text: "Quarterly reporting process", dept: "Finance" },
    { text: "Client onboarding steps", dept: "Ops" },
    { text: "Document review cycle", dept: "Legal" },
  ];
  const [checked, setChecked] = React.useState(items.map(() => false));
  React.useEffect(() => {
    if (!active) { setChecked(items.map(() => false)); return; }
    const timers = items.map((_, i) =>
      setTimeout(() => {
        setChecked((prev) => { const next = [...prev]; next[i] = true; return next; });
      }, 400 + i * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div className="mt-4 overflow-hidden rounded-md border border-border-warm bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-off-white px-2.5 py-1">
        <svg className="h-3 w-3 text-navy/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 3.75H12a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 0012 18.75h3.75a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25z" />
        </svg>
        <span className="text-[9px] text-navy/30">Workflow discovery</span>
      </div>
      <div className="px-2.5 py-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 border-b border-border-warm/30 py-1.5 last:border-b-0 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: active ? `${i * 150}ms` : "0ms" }}
          >
            <div className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded transition-all duration-300 ${checked[i] ? "bg-gold text-white" : "border border-navy/20"}`}>
              {checked[i] && (
                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
            <span className={`flex-1 text-[10px] transition-colors duration-300 ${checked[i] ? "text-navy/70" : "text-navy/35"}`}>{item.text}</span>
            <span className={`text-[9px] font-medium transition-colors duration-300 ${checked[i] ? "text-gold" : "text-navy/20"}`}>{item.dept}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TERMINAL_SCRIPT = [
  { text: "$ zpt build --company acme-corp", isCmd: true },
  { text: "● Creating company-context/overview.md... done", isCmd: false, color: "blue" },
  { text: "● Building skills/quarterly-analysis/... done", isCmd: false, color: "muted" },
  { text: "● Connecting MCP: Google Drive... done", isCmd: false, color: "muted" },
  { text: "● Connecting MCP: HubSpot... done", isCmd: false, color: "blue" },
  { text: "● Running validation... passed", isCmd: false, color: "green" },
];
const DOT_COLORS = { green: "text-[#4A9A6A]", blue: "text-[#5B8FB9]", muted: "text-navy/30" };

const TerminalVisual = ({ active }) => {
  const [lines, setLines] = React.useState([]);
  const [currentCmd, setCurrentCmd] = React.useState("");
  const cancelRef = React.useRef(false);
  React.useEffect(() => {
    cancelRef.current = false;
    if (!active) {
      cancelRef.current = true;
      setLines([]); setCurrentCmd("");
      return;
    }
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    (async function run() {
      while (!cancelRef.current) {
        setLines([]); setCurrentCmd("");
        for (const step of TERMINAL_SCRIPT) {
          if (cancelRef.current) return;
          if (step.isCmd) {
            for (let i = 0; i <= step.text.length; i++) {
              if (cancelRef.current) return;
              setCurrentCmd(step.text.slice(0, i));
              await sleep(25);
            }
            await sleep(250);
            setLines((p) => [...p, step]);
            setCurrentCmd("");
          } else {
            await sleep(350);
            if (cancelRef.current) return;
            setLines((p) => [...p, step]);
          }
        }
        await sleep(2000);
      }
    })();
    return () => { cancelRef.current = true; };
  }, [active]);

  return (
    <div className="mt-4 overflow-hidden rounded-md border border-border-warm bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-off-white px-2.5 py-1">
        <div className="h-1.5 w-1.5 rounded-full bg-red-300/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-yellow-300/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-green-300/50" />
        <span className="ml-1.5 text-[9px] text-navy/30">zpt-agent</span>
      </div>
      <div className="h-[100px] overflow-hidden px-2.5 py-1.5 font-mono text-[10px] leading-[16px]">
        {lines.map((line, i) => (
          <div key={i} className={line.isCmd ? "font-semibold text-gold-dark" : "text-navy/50"}>
            {line.isCmd ? line.text : (
              <>
                <span className={DOT_COLORS[line.color || "muted"]}>{line.text.charAt(0)}</span>
                {line.text.slice(1)}
              </>
            )}
          </div>
        ))}
        {currentCmd && (
          <div className="font-semibold text-gold-dark">
            {currentCmd}<span className="animate-pulse text-gold">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

const DocEditVisual = ({ active }) => {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    if (!active) { setPhase(0); return; }
    let frame = 0;
    const id = setInterval(() => { frame = (frame + 1) % 5; setPhase(frame); }, 1200);
    setPhase(1);
    return () => clearInterval(id);
  }, [active]);
  return (
    <div className="mt-4 overflow-hidden rounded-md border border-border-warm bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-off-white px-2.5 py-1">
        <svg className="h-3 w-3 text-navy/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <span className="text-[9px] text-navy/30">Q3-analysis-draft.md</span>
      </div>
      <div className="h-[100px] space-y-1.5 px-2.5 py-2 text-[10px] leading-[14px] text-navy/60">
        <p className={`transition-opacity duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}>
          Fund performance exceeded benchmark by{" "}
          <span className={`transition-all duration-400 ${phase >= 2 ? "text-[#D04A02] line-through decoration-[#D04A02]" : "font-semibold text-navy"}`}>2.3%</span>
          {phase >= 2 && <span className="ml-1 font-bold text-navy">2.4%</span>}
        </p>
        <p className={`transition-opacity duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}>
          in Q3, driven by <span className={`rounded-sm transition-all duration-500 ${phase >= 2 ? "bg-gold/30 px-0.5 font-semibold text-navy" : ""}`}>infrastructure allocation</span>.
        </p>
        <p className={`transition-opacity duration-500 ${phase >= 2 ? "opacity-100" : "opacity-0"}`}>
          Net cash flow: <span className={`transition-all duration-500 ${phase >= 3 ? "font-bold text-navy" : ""}`}>$4.2M</span>
          {phase >= 3 && <span className="ml-1 font-semibold text-[#4A9A6A]">(verified)</span>}
        </p>
        <p className={`transition-all duration-500 ${phase >= 3 ? "opacity-100" : "opacity-0"}`}>
          <span className={`transition-all duration-400 ${phase >= 4 ? "text-[#D04A02]/40 line-through decoration-[#D04A02]" : ""}`}>Risk rating: moderate</span>
          {phase >= 4 && <span className="ml-1 font-bold text-navy">Risk: low-moderate</span>}
        </p>
        <p className={`transition-opacity duration-500 ${phase >= 4 ? "opacity-100" : "opacity-0"}`}>
          <span className="font-bold text-[#4A9A6A]">✓ Review complete</span>
        </p>
      </div>
    </div>
  );
};

const TimelineVisual = ({ active }) => {
  const phases = [
    { label: "Discovery", duration: "1-2 days", width: "12%" },
    { label: "Build", duration: "1-2 weeks", width: "30%" },
    { label: "Test + Refine", duration: "1 week", width: "20%" },
    { label: "Ongoing improvements", duration: "", width: "38%" },
  ];
  return (
    <div className="mt-4">
      <div className="flex gap-0.5">
        {phases.map((p, i) => {
          const isLast = i === phases.length - 1;
          return (
            <div
              key={i}
              className={`transition-all duration-500 ${active ? "opacity-100" : "opacity-0"}`}
              style={{ width: p.width, transitionDelay: active ? `${i * 200}ms` : "0ms" }}
            >
              <div
                className={`h-1.5 rounded-full ${isLast ? "bg-gold/40 shimmer-stripe" : "bg-gold"}`}
                style={isLast ? { backgroundImage: "linear-gradient(90deg, #C9A96E 0%, #D4BA8A 50%, #C9A96E 100%)", backgroundSize: "200% 100%" } : undefined}
              />
              <p className="mt-1.5 text-[9px] font-medium text-navy/60">{p.label}</p>
              {p.duration && <p className="text-[8px] text-navy/30">{p.duration}</p>}
              {isLast && <p className="text-[8px] text-gold">→</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PROCESS_STEPS = [
  { title: "Understand", description: "Map workflows across departments, identify automation opportunities, and interview the team to understand what comes in, what steps happen, and what goes out." },
  { title: "Build", description: "Construct the directory: organizational context, automated skills, templates, and tool connections. Workflows are tackled one by one." },
  { title: "Test", description: "Your team runs the workflows with real data. ZPT refines until the output meets your standards." },
  { title: "Maintain", description: "After the engagement, ZPT keeps the directory current through regular check-ins and remote updates as AI capabilities evolve." },
];
const STEP_VISUALS = [DiscoveryVisual, TerminalVisual, DocEditVisual, TimelineVisual];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  // simulate the sticky-scroll feel with a manual cycle
  React.useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % 4), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-off-white px-8 py-32">
      <div className="mx-auto flex max-w-5xl gap-16">
        <div className="flex-1">
          <h2 className="font-heading text-4xl font-light tracking-tight text-navy">How We Work</h2>
          <p className="mt-4 max-w-md text-text-muted">
            We visit your company, understand how the team works, and build the right AI directory.
          </p>
          <a className="mt-8 inline-flex cursor-pointer items-center gap-2 font-logo text-sm font-medium text-navy underline underline-offset-4 transition-colors hover:text-gold">
            See the full process →
          </a>

          {/* tiny step selector for UI kit preview */}
          <div className="mt-10 flex gap-1.5">
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1.5 w-8 rounded-full transition-colors ${activeStep === i ? "bg-gold" : "bg-navy/15"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-3">
            {PROCESS_STEPS.map((step, i) => {
              const Visual = STEP_VISUALS[i];
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  className={`rounded-lg border p-5 transition-all duration-500 ${isActive ? "border-gold/40 bg-white shadow-sm" : "border-transparent"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-500 ${isActive ? "bg-gold text-navy" : "bg-navy/10 text-navy/40"}`}>
                      {i + 1}
                    </span>
                    <h3 className={`text-base font-semibold transition-colors duration-500 ${isActive ? "text-navy" : "text-navy/40"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? "mt-3 max-h-[280px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
                    {Visual && <Visual active={isActive} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

window.ProcessSection = ProcessSection;
