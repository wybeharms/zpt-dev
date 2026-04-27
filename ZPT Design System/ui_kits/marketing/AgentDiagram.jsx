/* AgentDiagram — recreates the "How an Agent Works" visual from the
   Technology page: brain (model) + hands (tools) + your company folder. */
const AgentDiagram = () => {
  const tools = [
    { label: "Google Drive", src: "../../assets/logos/google-drive.png" },
    { label: "HubSpot", src: "../../assets/logos/hubspot.png" },
    { label: "Slack", src: "../../assets/logos/slack.png" },
    { label: "Excel", src: "../../assets/logos/excel.png" },
    { label: "PowerPoint", src: "../../assets/logos/powerpoint.png" },
    { label: "Notion", src: "../../assets/logos/notion.png" },
  ];
  return (
    <section className="bg-off-white px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-4xl font-light tracking-tight text-navy">
          How an Agent Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-text-muted">
          There's been a lot of talk about AI agents. But few companies know how
          to actually implement them. ZPT bridges that gap.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {/* Brain */}
          <div className="rounded-xl border border-border-warm bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
            <h3 className="mt-4 font-heading text-xl font-light text-navy">The Brain</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              The AI model understands your company context and decides what to
              do next.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Claude", "ChatGPT", "Gemini"].map((m) => (
                <span key={m} className="rounded-md border border-border-warm bg-off-white px-2 py-0.5 font-logo text-[11px] text-navy/70">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Hands */}
          <div className="rounded-xl border border-gold/40 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="mt-4 font-heading text-xl font-light text-navy">The Hands</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              MCPs, plugins, and sub-agents that execute: read files, search the
              web, update your CRM.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {tools.map((t) => (
                <div
                  key={t.label}
                  title={t.label}
                  className="flex h-10 items-center justify-center rounded-md border border-border-warm bg-off-white"
                >
                  <img src={t.src} alt={t.label} className="h-5 w-5 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Your Setup */}
          <div className="rounded-xl border border-border-warm bg-navy p-6 text-white shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </div>
            <h3 className="mt-4 font-heading text-xl font-light text-white">
              Your Company Setup
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              The agent works from your company's information, workflows, and
              connected tools.
            </p>
            <div className="mt-4 rounded-md border border-white/10 bg-navy-light p-3 font-mono text-[11px] leading-5 text-white/70">
              <div className="text-gold">company/</div>
              <div>├── <span className="text-white">context/</span></div>
              <div>├── <span className="text-white">skills/</span></div>
              <div>├── <span className="text-white">templates/</span></div>
              <div>└── <span className="text-gold">integrations/</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.AgentDiagram = AgentDiagram;
