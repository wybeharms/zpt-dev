export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZPT",
    alternateName: "ZPT Partners",
    url: "https://zptpartners.com",
    email: "request@zptpartners.com",
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
