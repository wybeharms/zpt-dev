const ProspectsPage = () => {
  const prospects = [
    { name: "Elena Ruiz", company: "Latch & Co", title: "Head of Ops", email: "elena@latchco.com", score: 94 },
    { name: "Marcus Webb", company: "Northfield Leasing", title: "VP, Sales", email: "mwebb@northfield.io", score: 87 },
    { name: "Priya Shah", company: "Vantage Analytics", title: "CFO", email: "priya.shah@vantage.ai", score: 82 },
    { name: "Daniel Cho", company: "Beacon Partners", title: "Managing Director", email: "dcho@beacon.vc", score: 78 },
    { name: "Sam Ortiz", company: "Ridge Logistics", title: "COO", email: "s.ortiz@ridgelogistics.com", score: 71 },
    { name: "Hannah Weiss", company: "Oakmont Advisors", title: "Principal", email: "hannah@oakmont.com", score: 65 },
    { name: "Luis Moreno", company: "Parley Biotech", title: "Director of Strategy", email: "lmoreno@parleybio.com", score: 61 },
  ];

  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
        Prospects
      </h1>
      <div className="overflow-hidden rounded-lg border border-border-warm bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-warm bg-cream">
            <tr>
              {["Name", "Company", "Title", "Email", "Score"].map((h) => (
                <th key={h} className="px-6 py-3 font-medium text-text-muted">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-warm">
            {prospects.map((p, i) => (
              <tr key={i} className="hover:bg-off-white">
                <td className="px-6 py-3 text-text-primary">{p.name}</td>
                <td className="px-6 py-3 text-text-primary">{p.company}</td>
                <td className="px-6 py-3 text-text-muted">{p.title}</td>
                <td className="px-6 py-3 text-text-muted">{p.email}</td>
                <td className="px-6 py-3">
                  <span className="rounded bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold">
                    {p.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

window.ProspectsPage = ProspectsPage;
