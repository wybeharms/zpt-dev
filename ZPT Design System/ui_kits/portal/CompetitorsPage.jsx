const CompetitorsPage = () => {
  const rows = [
    { name: "Quorum AI", stage: "Series B", focus: "Enterprise RAG", strength: "Strong", note: "Heavy on vendor lock-in; slower implementation." },
    { name: "Folio Labs", stage: "Seed", focus: "Workflow agents", strength: "Moderate", note: "Similar positioning; thinner on MCP coverage." },
    { name: "Lattice Systems", stage: "Series A", focus: "Internal AI platforms", strength: "Strong", note: "Great tooling but sells a platform, not a service." },
    { name: "HarborOps", stage: "Seed", focus: "Ops automation", strength: "Light", note: "Narrow vertical — only logistics." },
  ];
  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">Competitors</h1>
      <p className="mb-6 max-w-2xl text-sm text-text-muted">
        A lightweight landscape view updated weekly by the ZPT agent. Strengths
        are relative to this customer's ICP and workflows.
      </p>
      <div className="overflow-hidden rounded-lg border border-border-warm bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-warm bg-cream">
            <tr>
              {["Company", "Stage", "Focus", "Signal", "Note"].map((h) => (
                <th key={h} className="px-6 py-3 font-medium text-text-muted">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-warm">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-off-white">
                <td className="px-6 py-3 font-medium text-text-primary">{r.name}</td>
                <td className="px-6 py-3 text-text-muted">{r.stage}</td>
                <td className="px-6 py-3 text-text-muted">{r.focus}</td>
                <td className="px-6 py-3">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      r.strength === "Strong"
                        ? "bg-[#8A2A2A]/10 text-[#8A2A2A]"
                        : r.strength === "Moderate"
                        ? "bg-gold/10 text-gold-dark"
                        : "bg-[#4A9A6A]/10 text-[#4A9A6A]"
                    }`}
                  >
                    {r.strength}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm text-text-muted">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

window.CompetitorsPage = CompetitorsPage;
