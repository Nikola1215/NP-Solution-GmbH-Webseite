import { FadeUp, SlideFromRight } from "../motion-primitives";
import { LocationPinIcon, ArrowRight } from "../icons";

const MAPS_URL = "https://www.google.com/maps?q=Undera+Forst+16,+9494+Schaan,+Liechtenstein";

export default function Standort() {
  return (
    <section className="py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-[#111] border border-brand/15 rounded-2xl grid lg:grid-cols-2">
          <FadeUp className="p-10 md:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-7 w-fit">
              <LocationPinIcon className="w-3.5 h-3.5" />
              Lokal verwurzelt. Regional im Einsatz.
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Verankert in Liechtenstein.
              <br />
              Im Rheintal zuhause.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Unser Standort in Schaan ermöglicht kurze Wege zu Kunden und Projekten in
              Liechtenstein, der Ostschweiz und im gesamten Rheintal.
            </p>
          </FadeUp>

          {/* Karte: nimmt auf Desktop die rechte Haelfte ueber die volle Hoehe der Box ein */}
          <SlideFromRight className="relative w-full h-72 lg:h-full border-t border-white/5 lg:border-t-0 lg:border-l lg:border-white/5">
            <iframe
              src={`${MAPS_URL}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NP Solution GmbH – Standort Schaan"
              className="absolute inset-0 w-full h-full"
              style={{
                filter: "grayscale(100%) invert(92%) contrast(89%)",
                border: 0,
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#090909]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-2">
              <p className="text-xs text-gray-400 leading-relaxed">
                NP Solution GmbH · Undera Forst 16 · 9494 Schaan
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand text-xs font-medium hover:gap-2 transition-all w-fit"
              >
                In Maps öffnen <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
}
