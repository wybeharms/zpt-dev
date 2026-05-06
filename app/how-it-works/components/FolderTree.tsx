"use client";

import { useState } from "react";

type TreeNode = {
  name: string;
  isFolder?: boolean;
  description?: string;
  children?: TreeNode[];
};

const tree: TreeNode = {
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
        { name: "team-structure.md" },
        {
          name: "terminology.md",
          description: "Industry terms and definitions",
        },
        { name: "style-guide.md", description: "How you write" },
        { name: "values.md" },
      ],
    },
    {
      name: "skills/",
      isFolder: true,
      children: [
        {
          name: "analyze-documents/",
          isFolder: true,
          children: [
            { name: "SKILL.md" },
            { name: "examples/", isFolder: true, children: [] },
          ],
        },
        {
          name: "draft-memo/",
          isFolder: true,
          children: [
            { name: "SKILL.md" },
            { name: "templates/", isFolder: true, children: [] },
          ],
        },
        {
          name: "extract-data/",
          isFolder: true,
          children: [{ name: "SKILL.md" }],
        },
        {
          name: "summarize-call/",
          isFolder: true,
          children: [{ name: "SKILL.md" }],
        },
        {
          name: "respond-to-rfp/",
          isFolder: true,
          children: [
            { name: "SKILL.md" },
            { name: "templates/", isFolder: true, children: [] },
          ],
        },
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
        { name: "investment-memo-template.md" },
        { name: "rfp-response-template.md" },
        { name: "weekly-update-template.md" },
        { name: "client-update-template.md" },
      ],
    },
    {
      name: "example-docs/",
      isFolder: true,
      description: "Real inputs and outputs",
      children: [
        { name: "good-memos/", isFolder: true, children: [] },
        { name: "winning-pitches/", isFolder: true, children: [] },
        { name: "reference-rfps/", isFolder: true, children: [] },
      ],
    },
  ],
};

/**
 * Caret that rotates 90 degrees on expand, no height transitions.
 */
function Caret({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-3 w-3 text-cognac transition-transform duration-150"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 2 L8 6 L4 10" />
      </svg>
    </span>
  );
}

/**
 * Tree-drawing characters: each line is built from its own ancestor
 * "open" state, so the vertical bars stop where they should.
 *
 *   ├──   middle child of its parent
 *   └──   last child of its parent
 *   │     parent has more siblings below this position; draw a vertical
 *         continuation line in this column
 *   (sp)  parent does not (no continuation)
 */
function renderPrefix(ancestorIsLast: boolean[], isLast: boolean): string {
  const parts: string[] = [];
  // For each ancestor level above us, draw either "│     " or "      "
  // (6 chars per level — slightly wider indent than the canonical 4-char
  // version so children read clearly under their parent.)
  ancestorIsLast.forEach((parentIsLast) => {
    parts.push(parentIsLast ? "      " : "│     ");
  });
  // Our own connector
  parts.push(isLast ? "└──── " : "├──── ");
  return parts.join("");
}

function TreeLine({
  node,
  prefix,
  open,
  hasChildren,
  onToggle,
  depth,
}: {
  node: TreeNode;
  prefix: string;
  open: boolean;
  hasChildren: boolean;
  onToggle: () => void;
  depth: number;
}) {
  const clickable = hasChildren && depth > 0;
  const Wrapper = clickable ? "button" : "div";
  return (
    <Wrapper
      type={clickable ? ("button" as const) : undefined}
      onClick={clickable ? onToggle : undefined}
      className={`group flex w-full items-center whitespace-pre text-left text-navy ${
        clickable
          ? "cursor-pointer hover:text-cognac focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cognac/40"
          : ""
      }`}
    >
      <span className="text-navy/55">{prefix}</span>
      {hasChildren && depth > 0 ? (
        <span className="mr-1.5 inline-flex">
          <Caret open={open} />
        </span>
      ) : null}
      <span>{node.name}</span>
      {node.description ? (
        <span className="ml-[2ch] text-navy/55">
          {`← ${node.description}`}
        </span>
      ) : null}
    </Wrapper>
  );
}

function TreeBranch({
  node,
  ancestorIsLast,
  isLast,
  expanded,
  toggle,
  path,
  depth,
}: {
  node: TreeNode;
  ancestorIsLast: boolean[];
  isLast: boolean;
  expanded: Set<string>;
  toggle: (path: string) => void;
  path: string;
  depth: number;
}) {
  const hasChildren = !!node.children && node.children.length > 0;
  const isOpen = depth === 0 ? true : expanded.has(path);
  const prefix = depth === 0 ? "" : renderPrefix(ancestorIsLast, isLast);

  return (
    <>
      <TreeLine
        node={node}
        prefix={prefix}
        open={isOpen}
        hasChildren={hasChildren}
        onToggle={() => toggle(path)}
        depth={depth}
      />
      {hasChildren && isOpen
        ? node.children!.map((child, i, arr) => {
            const childIsLast = i === arr.length - 1;
            const nextAncestorIsLast =
              depth === 0 ? [] : [...ancestorIsLast, isLast];
            const childPath = `${path}/${child.name}`;
            return (
              <TreeBranch
                key={childPath}
                node={child}
                ancestorIsLast={nextAncestorIsLast}
                isLast={childIsLast}
                expanded={expanded}
                toggle={toggle}
                path={childPath}
                depth={depth + 1}
              />
            );
          })
        : null}
    </>
  );
}

export default function FolderTree() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  return (
    <div
      className="mx-auto mt-12 max-w-[640px] rounded-md border border-navy/15 p-6 font-mono text-[14px] leading-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
      style={{ backgroundColor: "#E5DBC6" }}
    >
      <TreeBranch
        node={tree}
        ancestorIsLast={[]}
        isLast
        expanded={expanded}
        toggle={toggle}
        path={tree.name}
        depth={0}
      />
    </div>
  );
}
