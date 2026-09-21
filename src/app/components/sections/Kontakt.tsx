import ContactForm from "../ContactForm";
import { LocationPinIcon } from "../icons";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 px-6 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            Kontakt
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Projekt <span className="text-brand">besprechen.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Schildern Sie uns kurz Ihr Vorhaben oder Ihre Aufgabenstellung. Wir melden uns
            persönlich bei Ihnen zurück.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto mt-3">
            Sie möchten lieber persönlich vorbeikommen? Gerne setzen wir uns bei uns in Schaan
            auf einen Kaffee zusammen und besprechen Ihr Anliegen in Ruhe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <a
            href="https://www.google.com/maps?q=Undera+Forst+16,+9494+Schaan,+Liechtenstein"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] border border-white/5 hover:border-brand/50 rounded-xl p-6 space-y-3 transition-colors block"
          >
            <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
              <LocationPinIcon className="w-5 h-5" />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Adresse</p>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              NP Solution GmbH<br />
              Undera Forst 16<br />
              9494 Schaan<br />
              Liechtenstein
            </address>
            <p className="text-xs text-gray-500">Termine vor Ort nach Vereinbarung.</p>
          </a>

          <div className="group bg-[#111] border border-white/5 hover:border-[#25D366]/50 rounded-xl p-6 transition-colors flex flex-col gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(37,211,102,0.12)" }}>
              <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">WhatsApp & Telefon</p>
            <p className="text-sm font-semibold" style={{ color: "#25D366" }}>+41 78 704 36 86</p>
            <p className="text-xs text-gray-500">Antwort meist innert wenigen Stunden</p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="https://wa.me/41787043686"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: "#25D366" }}
              >
                WhatsApp schreiben →
              </a>
              <a
                href="tel:+41787043686"
                className="text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: "#25D366" }}
              >
                Direkt anrufen →
              </a>
            </div>
          </div>

          <a
            href="mailto:info@np-solution.li"
            className="bg-[#111] border border-white/5 hover:border-brand/50 rounded-xl p-6 space-y-3 transition-colors block"
          >
            <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">E-Mail</p>
            <span className="block text-sm text-brand font-medium">
              info@np-solution.li
            </span>
            <p className="text-xs text-gray-500">Für Anfragen und Unterlagen.</p>
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
