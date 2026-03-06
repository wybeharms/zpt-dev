"use client";

import { useI18n } from "./I18nProvider";

const toolLogos: { name: string; file: string }[] = [
  { name: "HubSpot", file: "/logos/hubspot.png" },
  { name: "Salesforce", file: "/logos/salesforce.png" },
  { name: "Google Drive", file: "/logos/google-drive.png" },
  { name: "Notion", file: "/logos/notion.png" },
  { name: "Slack", file: "/logos/slack.png" },
];

export default function ToolLogos({ portalTitle, portalDescription }: { portalTitle?: string; portalDescription?: string } = {}) {
  const { t } = useI18n();

  return (
    <section className="bg-cream px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-heading text-3xl font-light tracking-tight text-navy md:text-4xl">
          {t("sales.tools.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
          {t("sales.tools.subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          {/* Tool logos row */}
          <div className="flex flex-wrap justify-center gap-3">
            {toolLogos.map((tool) => (
              <div
                key={tool.name}
                className="flex h-14 w-14 items-center justify-center rounded-lg border border-border-warm bg-white p-2 shadow-sm"
              >
                <img
                  src={tool.file}
                  alt={tool.name}
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<span class="text-[10px] font-medium text-text-muted text-center leading-tight">${tool.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bidirectional vertical arrows */}
          <div className="flex flex-col items-center gap-0">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <svg className="h-5 w-5 rotate-180 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Folder badge */}
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-gold bg-navy p-2">
            <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
        </div>

        {/* Portal visibility — inline if props provided */}
        {portalTitle && (
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-border-warm bg-white p-6 text-center">
            <h3 className="font-heading text-2xl font-light tracking-tight text-navy md:text-3xl">
              {portalTitle}
            </h3>
            {portalDescription && (
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {portalDescription}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
