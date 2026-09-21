import { StaggerContainer, StaggerItem, HoverLift } from "../motion-primitives";
import { ArrowRight } from "../icons";

function IndustrieserviceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function SmartAutomationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  );
}

const LEISTUNGEN = [
  "Inbetriebnahme",
  "Elektrische Arbeiten & Verdrahtung",
  "Umbauten & Erweiterungen",
  "Revisionen",
  "Anlagenverschiebungen",
  "Fehlersuche",
  "Prüfung",
  "Dokumentation & Protokollierung",
];

const SMART_AUTOMATION_TAGS = [
  "Workflow-Automatisierung",
  "Interne Webtools",
  "Automatisierte Dokumente",
  "Daten & Schnittstellen",
  "Prozessdigitalisierung",
];

export default function IndustrieserviceOverview() {
  return (
    <section id="leistungen" className="py-20 px-6 bg-[#0c0c0c] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-5 gap-5 items-stretch" stagger={0.15}>

          {/* 01 – dominant */}
          <StaggerItem className="md:col-span-3">
            <HoverLift className="h-full">
              <a
                href="#leistungen-detail"
                className="group h-full flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-brand/20 hover:border-brand/40 bg-gradient-to-br from-[#151109] to-[#111] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-brand/15 flex items-center justify-center text-brand shrink-0">
                      <IndustrieserviceIcon />
                    </div>
                    <span className="text-xs text-brand font-mono font-medium">01</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Industrieservice & Automation</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                    Wir unterstützen Anlagenbauer und Industrieunternehmen direkt an Maschinen und
                    Anlagen – bei Inbetriebnahmen, elektrischen Arbeiten, Umbauten, Revisionen und
                    technischen Anpassungen.
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-6">
                    {LEISTUNGEN.map((l) => (
                      <li key={l} className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5">
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-brand text-sm font-medium">
                  Industrieservice ansehen <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </HoverLift>
          </StaggerItem>

          {/* 02 – sekundär */}
          <StaggerItem className="md:col-span-2">
            <HoverLift className="h-full">
              <a
                href="#smart-automation"
                className="group h-full flex flex-col justify-between p-8 rounded-2xl border border-white/5 hover:border-brand/30 bg-[#111]/60 hover:bg-[#111] transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/20 transition-colors">
                      <SmartAutomationIcon />
                    </div>
                    <span className="text-xs text-brand font-mono font-medium">02</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Automation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Wir entwickeln einfache digitale Lösungen für wiederkehrende Abläufe. Damit
                    lassen sich Prozesse vereinfachen, Zeit sparen und Fehler reduzieren.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Von automatisierten Workflows bis zu kleinen internen Tools – immer passend
                    zum konkreten Anwendungsfall.
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-5">
                    {SMART_AUTOMATION_TAGS.map((t) => (
                      <li key={t} className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-brand text-sm font-medium">
                  Smart Automation ansehen <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </HoverLift>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
