"use client";

import { useState } from "react";

const links = [
  { href: "#automation", label: "Systemtechnik" },
  { href: "#digitalisierung", label: "Smart Automation" },
  { href: "#marketing", label: "Marketing" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col gap-[5px] p-2"
        aria-label="Menü öffnen"
      >
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      <div
        className="absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-white/5 px-6 overflow-hidden"
        style={{
          maxHeight:  open ? "360px" : "0",
          paddingBottom: open ? "24px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding-bottom 0.35s ease",
        }}
      >
          <div className="flex flex-col gap-1 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-gray-300 hover:text-brand transition-colors border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 text-center bg-brand hover:bg-[#e05400] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
      </div>
    </div>
  );
}
