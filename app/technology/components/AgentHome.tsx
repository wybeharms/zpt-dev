import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import FolderTree, {
  type TreeNode,
} from "../../how-it-works/components/FolderTree";

const storageProviders = [
  { src: "/external_logos/GitHub.png", label: "GitHub" },
  { src: "/external_logos/sharepoint.png", label: "SharePoint" },
  { src: "/external_logos/google-drive.png", label: "Google Drive" },
  { src: "/external_logos/Dropbox.png", label: "Dropbox" },
];

// Shorter folder tree shown on /technology. Each top-level folder has
// a handful of children so the click-to-expand interaction has
// something to reveal, without dragging in the full /how-it-works
// reference tree. The deeper structure stays unique to /how-it-works,
// where the bridge link at the bottom of this section sends curious
// readers.
const AGENT_HOME_TREE: TreeNode = {
  name: "your-company/",
  isFolder: true,
  children: [
    {
      name: "CLAUDE.md",
      description: "Instructions for the AI agent",
    },
    {
      name: "company-context/",
      isFolder: true,
      children: [
        { name: "overview.md", description: "Who you are, what you do" },
        { name: "terminology.md", description: "Industry terms" },
        { name: "style-guide.md", description: "How you write" },
      ],
    },
    {
      name: "skills/",
      isFolder: true,
      children: [
        { name: "draft-memo/", isFolder: true, children: [] },
        { name: "analyze-documents/", isFolder: true, children: [] },
        { name: "summarize-call/", isFolder: true, children: [] },
      ],
    },
    {
      name: "templates/",
      isFolder: true,
      children: [
        {
          name: "memo-template.md",
          description: "Output formatting standards",
        },
        { name: "weekly-update-template.md" },
      ],
    },
    {
      name: "example-docs/",
      isFolder: true,
      description: "Real inputs and outputs",
      children: [
        { name: "good-memos/", isFolder: true, children: [] },
        { name: "winning-pitches/", isFolder: true, children: [] },
      ],
    },
  ],
};

/**
 * Section 5 — tinted-cream band (#E0CDB0). Frames the agent package as
 * a folder the team owns. Two-column body: the static folder tree on
 * the left shows what's inside; a 2x2 grid of storage-provider logos on
 * the right shows where it can live. The pair stacks on mobile.
 */
export default function AgentHome() {
  return (
    <Section
      id="agent-home"
      bg="cream"
      align="header"
      bgColor="#E0CDB0"
    >
      <div className="max-w-[760px]">
        <SectionEyebrow bg="cream">Where It Lives</SectionEyebrow>
        <SectionHeading bg="cream">The Agent&apos;s Home.</SectionHeading>
        <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-navy/75">
          An agent is only as good as the folder it operates in. The folder
          holds context, skills, templates, and real examples. Your team
          owns it, runs it, and grows it.
        </p>
      </div>

      {/* Two-column body: folder tree on the left, storage logos on the
          right (stacks on mobile). The pair is constrained to a narrower
          inner width and centered inside the section to avoid empty
          stretches of cream on either side. */}
      <div className="mx-auto mt-14 flex max-w-[820px] flex-col items-center gap-10 md:mt-16 md:flex-row md:items-center md:justify-center md:gap-14">
        <div className="w-full max-w-[460px]">
          <FolderTree
            tree={AGENT_HOME_TREE}
            className="w-full rounded-md border border-navy/15 p-6 font-mono text-[14px] leading-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
          />
        </div>
        <div className="grid w-full max-w-[280px] grid-cols-2 gap-3 md:gap-4">
          {storageProviders.map((provider) => (
            <div
              key={provider.label}
              className="flex flex-col items-center rounded-md border border-navy/10 bg-cream px-4 py-4 md:py-5"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center md:h-[60px] md:w-[60px]">
                <img
                  src={provider.src}
                  alt={provider.label}
                  className="h-full w-full rounded-md object-contain"
                />
              </div>
              <span className="mt-2.5 text-center text-[12px] tracking-wide text-navy/70">
                {provider.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[760px] text-center text-[14px] leading-[1.65] text-navy/70">
        The package is a folder. It can be zipped and shared. For ongoing
        use, GitHub is the recommended home (version-controlled and easy
        to update). SharePoint, Google Drive, and Dropbox also work.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/how-it-works#what-you-get"
          className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-cognac transition-colors duration-150 hover:text-cognac-deep"
        >
          See the full structure on How It Works
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
