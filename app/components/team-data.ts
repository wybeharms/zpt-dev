/**
 * Single source of truth for the team roster. Used by /team and by the
 * home page TeamPreview teaser. Each member has two separate 766×1024
 * (3:4) portraits in /public/team/: a professional `photo` and a stylized
 * `marine` painting. PortraitSwap cross-fades between them on hover/tap.
 *
 * Spaces in filenames are URL-encoded so the asset path is unambiguous
 * regardless of how the rendering layer handles it.
 *
 * Both grids are laid out for the current roster of three. When the
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
];
