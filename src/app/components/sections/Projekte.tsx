import ImagePlaceholder from "../ImagePlaceholder";
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from "../motion-primitives";

type ProjektKarte = {
  titel: string;
  region: string;
  leistungsumfang: string[];
};

// Platzhalter-Struktur fuer echte Referenzprojekte (siehe BRIEFING.md Punkt 11 / 26).
// Keine echten Kunden/Projekte erfinden - sobald reale Projekte vorliegen, hier ersetzen.
const PROJEKTE: ProjektKarte[] = [
  {
    titel: "Inbetriebnahme Produktionsanlage",
    region: "Liechtenstein",
    leistungsumfang: ["Inbetriebnahme", "Elektrische Anpassungen", "Dokumentation"],
  },
  {
    titel: "Anlagenumbau & Erweiterung",
    region: "Schweiz",
    leistungsumfang: ["Umbau", "Verdrahtung", "Wiederinbetriebnahme"],
  },
];

export default function Projekte() {
  return (
    <section id="projekte" className="py-28 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">Projekte</span>
            <span className="w-8 h-px bg-brand/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Referenzen im Aufbau</h2>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          {PROJEKTE.map((p) => (
            <StaggerItem key={p.titel}>
              <HoverLift className="h-full">
                <div className="group h-full rounded-2xl border border-white/5 hover:border-brand/30 bg-[#111]/60 hover:bg-[#111] overflow-hidden transition-colors">
                  <ImagePlaceholder
                    label={`Bildplatzhalter – ${p.titel}`}
                    className="aspect-video w-full"
                  />
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-medium px-3 py-1 rounded-full mb-4">
                      Projekt folgt in Kürze
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{p.titel}</h3>
                    <p className="text-sm text-gray-500 mb-4">{p.region}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.leistungsumfang.map((l) => (
                        <span key={l} className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
