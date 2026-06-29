import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – NP Solution GmbH",
  description: "Datenschutzerklärung der NP Solution GmbH, Schaan, Liechtenstein.",
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

function DSSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-8 border-b border-white/5 last:border-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-brand font-mono text-sm font-medium shrink-0">{number}</span>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      <div className="pl-7 text-gray-400 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Datenschutzerklärung</h1>
          <p className="text-gray-500 text-sm">Stand: Juni 2026</p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl px-8 divide-y divide-white/5">

          <DSSection number="1." title="Verantwortlicher">
            <address className="not-italic space-y-1">
              <p className="text-white font-medium">NP Solution GmbH</p>
              <p>Undera Forst 16, 9494 Schaan, Liechtenstein</p>
            </address>
            <p className="mt-2">
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
          </DSSection>

          <DSSection number="2." title="Allgemeines">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den geltenden
              datenschutzrechtlichen Bestimmungen des Fürstentums Liechtenstein sowie der
              Datenschutz-Grundverordnung (DSGVO). Die Nutzung unserer Webseite ist
              grundsätzlich ohne Angabe personenbezogener Daten möglich.
            </p>
          </DSSection>

          <DSSection number="3." title="Hosting und Bereitstellung">
            <p>
              Unsere Webseite wird über die Plattform Vercel bereitgestellt. Beim Aufruf werden
              automatisch technische Informationen erfasst: IP-Adresse, Datum und Uhrzeit,
              Browsertyp, Betriebssystem, Referrer-URL, aufgerufene Seiten.
            </p>
            <p className="text-sm text-gray-500 mt-1">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
          </DSSection>

          <DSSection number="4." title="Kontaktformular">
            <p>
              Verarbeitete Daten: Name, E-Mail-Adresse, Telefonnummer (sofern angegeben),
              Nachrichteninhalt.
            </p>
            <p className="text-sm text-gray-500 mt-1">Rechtsgrundlage: Art. 6 Abs. 1 lit. b oder lit. f DSGVO</p>
          </DSSection>

          <DSSection number="5." title="Kontaktaufnahme per E-Mail">
            <p>
              Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p className="text-sm text-gray-500 mt-1">Rechtsgrundlage: Art. 6 Abs. 1 lit. b oder lit. f DSGVO</p>
          </DSSection>

          <DSSection number="6." title="Cookies">
            <p>
              Diese Webseite verwendet ausschliesslich technisch notwendige Cookies. Es findet
              keine Analyse des Nutzerverhaltens zu Werbe- oder Marketingzwecken statt.
            </p>
          </DSSection>

          <DSSection number="7." title="Google Maps">
            <p>
              Zur Darstellung des Standorts kann Google Maps verwendet werden.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
            </p>
          </DSSection>

          <DSSection number="8." title="Verlinkungen zu sozialen Netzwerken">
            <p>
              Unsere Webseite enthält Verlinkungen zu Instagram und WhatsApp. Beim Anklicken
              verlassen Sie unsere Webseite.
            </p>
          </DSSection>

          <DSSection number="9." title="Datensicherheit">
            <p>
              Diese Webseite nutzt SSL/TLS-Verschlüsselung zur sicheren Datenübertragung.
            </p>
          </DSSection>

          <DSSection number="10." title="Ihre Rechte">
            <p>Sie haben das Recht auf:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Auskunft über die zu Ihrer Person gespeicherten Daten",
                "Berichtigung unrichtiger Daten",
                "Löschung Ihrer Daten",
                "Einschränkung der Verarbeitung",
                "Datenübertragbarkeit",
                "Widerspruch gegen die Verarbeitung",
                "Widerruf erteilter Einwilligungen",
              ].map((right) => (
                <li key={right} className="flex items-start gap-2.5 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Kontakt:{" "}
              <a href="mailto:info@np-solution.li" className="text-brand hover:text-[#ff7a2a] transition-colors font-medium">
                info@np-solution.li
              </a>
            </p>
          </DSSection>

          <DSSection number="11." title="Beschwerderecht">
            <address className="not-italic space-y-1">
              <p className="text-white font-medium">Datenschutzstelle Fürstentum Liechtenstein</p>
              <p>Städtle 38</p>
              <p>9490 Vaduz, Liechtenstein</p>
            </address>
          </DSSection>

          <DSSection number="12." title="Änderungen">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
            </p>
          </DSSection>

        </div>
      </main>

      <footer className="border-t border-white/5 py-10 px-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 NP Solution GmbH · Schaan, Liechtenstein</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-gray-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-brand/70 hover:text-brand transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
