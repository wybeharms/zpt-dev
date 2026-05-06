import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import FolderTree from "./FolderTree";

export default function WhatYouGet() {
  return (
    <Section id="what-you-get" bg="cream" align="header">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">What You Get</SectionEyebrow>
        <SectionHeading bg="cream">A Foundation Your Team Owns.</SectionHeading>
        <p className="mt-6 max-w-[640px] text-[16px] leading-[1.7] text-navy/75">
          An agent is only as good as the package it works from. ZPT builds
          that foundation for your organization: instructions, context,
          skills, templates, and real examples. Your team owns it, runs it,
          and grows it.
        </p>
      </div>

      <FolderTree />

      <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] italic leading-[1.6] text-navy/55">
        Building a folder that agents can operate in is more art than
        science. Every organization&apos;s looks different.
      </p>
    </Section>
  );
}
