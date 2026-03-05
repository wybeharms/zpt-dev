"use client";

import { useEffect, useState } from "react";

interface Prospect {
  name?: string;
  company?: string;
  title?: string;
  email?: string;
  linkedin?: string;
  score?: number;
  [key: string]: unknown;
}

export default function ProspectsPage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portal/data?type=enrichment")
      .then((res) => (res.ok ? res.json() : { data: [] }))
      .then((data) => setProspects(data.data ?? []))
      .catch(() => setProspects([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="text-sm text-text-muted">Loading prospects...</span>
      </div>
    );
  }

  if (prospects.length === 0) {
    return (
      <div>
        <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
          Prospects
        </h1>
        <div className="rounded-lg border border-border-warm bg-white px-6 py-12 text-center">
          <p className="text-sm text-text-muted">
            No enriched prospects yet. Data will appear here once processing is complete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
        Prospects
      </h1>
      <div className="overflow-hidden rounded-lg border border-border-warm bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-warm bg-cream">
            <tr>
              <th className="px-6 py-3 font-medium text-text-muted">Name</th>
              <th className="px-6 py-3 font-medium text-text-muted">Company</th>
              <th className="px-6 py-3 font-medium text-text-muted">Title</th>
              <th className="px-6 py-3 font-medium text-text-muted">Email</th>
              <th className="px-6 py-3 font-medium text-text-muted">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-warm">
            {prospects.map((p, i) => (
              <tr key={i} className="hover:bg-off-white">
                <td className="px-6 py-3 text-text-primary">{p.name ?? "—"}</td>
                <td className="px-6 py-3 text-text-primary">{p.company ?? "—"}</td>
                <td className="px-6 py-3 text-text-muted">{p.title ?? "—"}</td>
                <td className="px-6 py-3 text-text-muted">{p.email ?? "—"}</td>
                <td className="px-6 py-3">
                  {p.score != null ? (
                    <span className="rounded bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold">
                      {p.score}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
