import { FadeUp, SlideFromRight } from "../motion-primitives";
import { LocationPinIcon } from "../icons";

export default function Standort() {
  return (
    <section className="py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-[#111] border border-brand/15 rounded-2xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <FadeUp className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
                <LocationPinIcon className="w-3.5 h-3.5" />
                Lokal verwurzelt. Regional tätig.
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                Verankert in Liechtenstein.
                <br />
                Im Rheintal zuhause.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Unser Standort in Schaan ermöglicht kurze Wege zu Industrieunternehmen in
                Liechtenstein, der Ostschweiz und im Rheintal.
              </p>
            </FadeUp>

            <SlideFromRight className="shrink-0 w-full md:w-[300px]">
              <div className="rounded-xl overflow-hidden border border-brand/20">
                <iframe
                  src="https://www.google.com/maps?q=Undera+Forst+16,+9494+Schaan,+Liechtenstein&output=embed"
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NP Solution GmbH – Standort Schaan"
                  style={{
                    filter: "grayscale(100%) invert(92%) contrast(89%)",
                    display: "block",
                  }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-600 text-center">
                NP Solution GmbH · Undera Forst 16 · 9494 Schaan
              </p>
            </SlideFromRight>
          </div>
        </div>
      </div>
    </section>
  );
}
