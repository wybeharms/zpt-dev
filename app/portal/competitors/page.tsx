"use client";

import { useEffect, useState } from "react";

interface Competitor {
  name?: string;
  website?: string;
  summary?: string;
  strengths?: string[];
  weaknesses?: string[];
  [key: string]: unknown;
}

export default function CompetitorsPage() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portal/data?type=competitors")
      .then((res) => (res.ok ? res.json() : { data: [] }))
      .then((data) => setCompetitors(data.data ?? []))
      .catch(() => setCompetitors([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="text-sm text-text-muted">Loading competitor analysis...</span>
      </div>
    );
  }

  if (competitors.length === 0) {
    return (
      <div>
        <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
          Competitors
        </h1>
        <div className="rounded-lg border border-border-warm bg-white px-6 py-12 text-center">
          <p className="text-sm text-text-muted">
            No competitor analysis yet. Data will appear here once processing is complete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
        Competitors
      </h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {competitors.map((c, i) => (
          <div
            key={i}
            className="rounded-lg border border-border-warm bg-white p-6"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {c.name ?? "Unknown"}
                </h3>
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-gold"
                  >
                    {c.website}
                  </a>
                )}
              </div>
            </div>

            {c.summary && (
              <p className="mb-4 text-sm text-text-muted">{c.summary}</p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {c.strengths && c.strengths.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                    Strengths
                  </h4>
                  <ul className="space-y-1">
                    {c.strengths.map((s, j) => (
                      <li key={j} className="text-sm text-text-primary">
                        + {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {c.weaknesses && c.weaknesses.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                    Weaknesses
                  </h4>
                  <ul className="space-y-1">
                    {c.weaknesses.map((w, j) => (
                      <li key={j} className="text-sm text-text-primary">
                        - {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
