export type NavLink = { href: string; label: string };

// Anchor targets (#leistungen, #projekte, #ueber) are established on the
// homepage sections; "/" prefix keeps them working from other routes too.
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Start" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#ueber", label: "Über NP Solution" },
  { href: "/run-club", label: "Run Club" },
  { href: "/#kontakt", label: "Kontakt" },
];

export const CONTACT_HREF = "/#kontakt";
