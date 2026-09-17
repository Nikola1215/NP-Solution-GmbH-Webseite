import Link from "next/link";
import { NAV_LINKS } from "../nav-links";

export default function SiteFooter() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="relative overflow-hidden w-[120px] h-[62px]">
            <img
              src="/logo.svg"
              alt="NP Solution GmbH"
              className="absolute h-auto w-[120px] top-[-33px]"
            />
          </div>
          <address className="not-italic text-xs text-gray-600">
            Undera Forst 16 · 9494 Schaan · Liechtenstein
          </address>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
          {NAV_LINKS.filter((l) => l.label !== "Start").map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://www.instagram.com/np_solution.li"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NP Solution auf Instagram"
            className="text-white hover:text-[#FF5F00] transition-colors"
            style={{ transition: "color 0.2s ease" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <p className="text-sm text-gray-600">© 2026 NP Solution GmbH</p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/impressum" className="hover:text-gray-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
