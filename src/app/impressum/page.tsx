import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – NP Solution GmbH",
  description: "Impressum der NP Solution GmbH, Schaan, Liechtenstein.",
};

function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-brand text-sm font-medium hover:gap-3 transition-all mb-12 group"
    >
      <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      Zurück zur Startseite
    </Link>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-white/5 last:border-0">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      <div className="text-gray-400 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div className="bg-[#090909] text-white min-h-screen font-sans">

      {/* Minimal top bar */}
      <header className="border-b border-white/5 bg-[#090909]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative overflow-hidden w-[140px] h-[72px] md:w-[180px] md:h-[93px]">
              <img
                src="/logo.svg"
                alt="NP Solution GmbH"
                className="absolute h-auto w-[140px] top-[-39px] md:w-[180px] md:top-[-50px]"
              />
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <BackLink />

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">Rechtliches</span>
            <span className="w-8 h-px bg-brand/40" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Impressum</h1>
          <p className="text-gray-500 text-sm">
            Angaben gemäss Art. 5 E-Commerce-Gesetz (ECG)
          </p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl px-8 divide-y divide-white/5">

          <Section title="Unternehmensangaben">
            <p className="text-white font-medium text-base mb-3">NP Solution GmbH</p>
            <address className="not-italic space-y-1">
              <p>Undera Forst 16</p>
              <p>9494 Schaan</p>
              <p>Liechtenstein</p>
            </address>
            <div className="mt-4 space-y-1.5">
              <p>
                <span className="text-gray-500 text-sm mr-2">Telefon</span>
                <a href="tel:+41787043686" className="text-brand hover:text-[#ff7a2a] transition-colors font-medium">
                  +41 78 704 36 86
                </a>
              </p>
              <p>
                <span className="text-gray-500 text-sm mr-2">E-Mail</span>
                <a href="mailto:info@np-solution.li" className="text-brand hover:text-[#ff7a2a] transition-colors font-medium">
                  info@np-solution.li
                </a>
              </p>
            </div>
          </Section>

          <Section title="Vertretung">
            <p>Vertreten durch: <span className="text-white">Nikola Prvujkic, Geschäftsführer</span></p>
          </Section>

          <Section title="Handelsregister">
            <p>Register: <span className="text-white">Liechtensteinisches Handelsregister</span></p>
            <p>Handelsregisternummer: <span className="text-white font-mono">FL-0002.757.698-6</span></p>
            <p>Mehrwertsteuer-Nummer: <span className="text-white font-mono">64055</span></p>
          </Section>

          <Section title="Haftungsausschluss">
            <p>
              Die Inhalte dieser Webseite wurden mit grösstmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte übernimmt
              die NP Solution GmbH jedoch keine Gewähr. Haftungsansprüche gegen die NP Solution
              GmbH wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der
              Nutzung beziehungsweise Nichtnutzung der veröffentlichten Informationen entstanden
              sind, werden ausgeschlossen, soweit gesetzlich zulässig.
            </p>
          </Section>

          <Section title="Urheberrechte">
            <p>
              Die auf dieser Webseite veröffentlichten Inhalte, Texte, Bilder, Grafiken und
              sonstigen Inhalte unterliegen dem Urheberrecht. Jede Verwendung, Vervielfältigung
              oder Weitergabe ausserhalb der gesetzlichen Grenzen bedarf der vorherigen
              schriftlichen Zustimmung der NP Solution GmbH.
            </p>
          </Section>

        </div>
      </main>

      <footer className="border-t border-white/5 py-10 px-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 NP Solution GmbH · Schaan, Liechtenstein</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="text-brand/70 hover:text-brand transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
