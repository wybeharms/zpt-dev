/**
 * Single source of truth for the team roster. Used by /team and by the
 * home page TeamPreview teaser. Each member has two separate 766×1024
 * (3:4) portraits in /public/team/: a professional `photo` and a stylized
 * `marine` painting. PortraitSwap cross-fades between them on hover/tap.
 *
 * Spaces in filenames are URL-encoded so the asset path is unambiguous
 * regardless of how the rendering layer handles it.
 *
 * Both grids are laid out for the current roster of four. When the
 * roster changes size, update the column counts in TeamGrid and
 * TeamPreview with it.
 */
export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  marine: string;
  bio: string;
  linkedin: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Wybe Harms",
    role: "Founder and Chief ZPTer",
    photo: "/team/Wybe%20Harms-photo.webp",
    marine: "/team/Wybe%20Harms-marine.webp",
    bio: "Started a software company that was reshaped by Claude Code, then founded ZPT to help other teams navigate the same shift.",
    linkedin: "https://www.linkedin.com/in/wybe-harms/",
  },
  {
    name: "Jasper Moll",
    role: "Co-Founder & Forward-Deployed ZPTer",
    photo: "/team/Jasper%20Moll-photo.webp",
    marine: "/team/Jasper%20Moll-marine.webp",
    bio: "Forward-deployed engineer shipping production agent workflows for cross-functional teams. Trained in business engineering with prior project management experience.",
    linkedin: "https://www.linkedin.com/in/jasper-moll-9a1424139/",
  },
  {
    name: "Arnau Ribé",
    role: "Commercial Lead",
    photo: "/team/Arnau_Ribe-photo.webp",
    marine: "/team/Arnau_Ribe-marine.webp",
    bio: "Background in Public Relations and Communications at Universitat Autònoma de Barcelona, with commercial experience at Ringover and Across Logistics. Leads ZPT's outreach and partnerships.",
    linkedin: "https://www.linkedin.com/in/arnaurib%C3%A9ifernandez/",
  },
  {
    name: "Gavin Abel",
    role: "AI Education Intern",
    photo: "/team/gavin-photo.webp",
    marine: "/team/gavin-marine.webp",
    bio: "Studies Finance and Accounting at CU Boulder's Leeds School of Business, with internship experience at Coghill Capital and Mesirow Financial. Develops ZPT's AI courses and educational resources, helping teams move from understanding AI to applying it in their daily workflows.",
    linkedin: "https://www.linkedin.com/in/gavinabel/",
  },
];
