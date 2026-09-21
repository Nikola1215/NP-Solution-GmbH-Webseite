import { SHOW_PROJEKTE_SECTION } from "../site-config";

export type NavLink = { href: string; label: string };

// Anchor targets (#leistungen, #projekte, #ueber) are established on the
// homepage sections; "/" prefix keeps them working from other routes too.
// Der "Projekte"-Punkt erscheint nur, solange die Sektion aktiv ist
// (siehe SHOW_PROJEKTE_SECTION in site-config.ts) – Navbar, MobileNav und
// Footer nutzen alle dieses Array und blenden ihn dadurch automatisch mit aus.
export const NAV_LINKS: NavLink[] = [
  { href: "/#leistungen", label: "Leistungen" },
  ...(SHOW_PROJEKTE_SECTION ? [{ href: "/#projekte", label: "Projekte" }] : []),
  { href: "/#ueber", label: "Über NP Solution" },
  { href: "/run-club", label: "Run Club" },
  { href: "/#kontakt", label: "Kontakt" },
];

export const CONTACT_HREF = "/#kontakt";
