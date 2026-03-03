export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZPT",
    alternateName: "Zero Person Team",
    url: "https://zpteam.ai",
    email: "request@zpteam.ai",
    description:
      "AI sales agents for B2B companies. Sourcing, enrichment, and outreach using AI agents that connect to existing tools.",
    areaServed: "Worldwide",
    foundingDate: "2025",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
