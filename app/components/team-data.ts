/**
 * Single source of truth for the team roster. Used by /team and by the
 * home page TeamPreview teaser. Portraits in /public/team/ are 1536×1024
 * (3:2) composites — professional left half, marine right half — that
 * PortraitSwap renders with a hover-driven cross-fade.
 *
 * Spaces in filenames are URL-encoded so the asset path is unambiguous
 * regardless of how the rendering layer handles it.
 */
export type TeamMember = {
  name: string;
  role: string;
  portrait: string;
  bio: string;
  linkedin: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Wybe Harms",
    role: "Founder",
    portrait: "/team/Wybe%20Harms.webp",
    bio: "Started a software company that was reshaped by Claude Code, then founded ZPT to help other teams navigate the same shift.",
    linkedin: "https://www.linkedin.com/in/wybe-harms/",
  },
  {
    name: "Jasper Moll",
    role: "Co-Founder & Forward-Deployed Engineer",
    portrait: "/team/Jasper%20Moll.webp",
    bio: "Forward-deployed engineer shipping production agent workflows for cross-functional teams. Trained in business engineering with prior project management experience.",
    linkedin: "https://www.linkedin.com/in/jasper-moll-9a1424139/",
  },
  {
    name: "Alessandro Condorelli",
    role: "Forward-Deployed Engineer",
    portrait: "/team/Alessandro%20Condorelli.webp",
    bio: "MSc candidate in Analytics and Management at London Business School, where he founded the public speaking and debating extracurricular.",
    linkedin: "https://www.linkedin.com/in/alessandro-condorelli-82685221a/",
  },
  {
    name: "Arnau Ribé",
    role: "Commercial Lead",
    portrait: "/team/Arnau_Ribe.webp",
    bio: "Background in Public Relations and Communications at Universitat Autònoma de Barcelona, with commercial experience at Ringover and Across Logistics. Leads ZPT's outreach and partnerships.",
    linkedin: "https://www.linkedin.com/in/arnaurib%C3%A9ifernandez/",
  },
];
