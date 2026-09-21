// Zentrale Ein-/Aus-Schalter fuer Website-Bereiche, die (noch) nicht bereit sind.
// Sektionen werden dadurch NICHT geloescht, nur ausgeblendet.

// Projekte/Referenzen-Sektion auf der Startseite (inkl. Nav-Punkt "Projekte" in
// Navbar, MobileNav und Footer, die alle vom selben Flag ueber NAV_LINKS gesteuert
// werden). Wieder einblenden: auf true setzen.
// Neue, echte Projekte werden im PROJEKTE-Array in
// src/app/components/sections/Projekte.tsx eingetragen.
export const SHOW_PROJEKTE_SECTION = false;
