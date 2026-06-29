"use client";

import { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "#automation",     label: "Systemtechnik" },
  { href: "#digitalisierung",label: "Smart Automation" },
  { href: "#marketing",      label: "Marketing" },
  { href: "#kontakt",        label: "Kontakt" },
];

function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 50) {
        setVisible(true);
      } else if (current < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{
        background: "rgba(9, 9, 11, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <a href="#" className="flex items-center">
          <div className="relative overflow-hidden w-[140px] h-[72px] md:w-[180px] md:h-[93px]">
            <img
              src="/logo.svg"
              alt="NP Solution GmbH"
              className="absolute h-auto w-[140px] top-[-39px] md:w-[180px] md:top-[-50px]"
            />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="hidden md:flex items-center gap-1.5 bg-brand hover:bg-[#e05400] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Kontakt <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <MobileNav />
      </nav>
    </header>
  );
}
