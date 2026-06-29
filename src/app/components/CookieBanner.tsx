"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#1A1A20] border-t border-[#2E2E34] px-6 py-4"
      style={{
        transform:     visible ? "translateY(0)" : "translateY(100%)",
        transition:    "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
      role="dialog"
      aria-label="Cookie-Hinweis"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-400 leading-relaxed">
          Diese Webseite verwendet ausschliesslich technisch notwendige Cookies. Weitere
          Informationen finden Sie in unserer{" "}
          <Link
            href="/datenschutz"
            className="text-brand hover:text-[#ff7a2a] underline underline-offset-2 transition-colors"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="bg-brand hover:bg-[#e05400] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Verstanden
          </button>
          <Link
            href="/datenschutz"
            className="border border-white/15 hover:border-white/30 text-gray-300 hover:text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
