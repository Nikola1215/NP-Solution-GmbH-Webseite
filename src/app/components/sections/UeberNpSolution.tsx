import Image from "next/image";
import { FadeUp, ScaleIn, SlideFromRight, StaggerContainer, StaggerItem } from "../motion-primitives";
import { CheckIcon } from "../icons";

function EducationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 0 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  );
}

function InitiativeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

export default function UeberNpSolution() {
  return (
    <section id="ueber" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">Über NP Solution</span>
            <span className="w-8 h-px bg-brand/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technik aus der Praxis.</h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 mb-14">
          <ScaleIn className="flex flex-col items-center gap-5">
            {/* Portrait des Gruenders */}
            <div
              className="relative w-full max-w-[220px] lg:max-w-none mx-auto aspect-[3/4] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 0 2px rgba(255,95,0,0.35), 0 0 32px -4px rgba(255,95,0,0.25)" }}
            >
              <Image
                src="/nikola.jpg"
                alt="Nikola Prvujkic"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 260px"
                priority
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">Nikola Prvujkic</p>
              <p className="text-sm text-brand">Gründer & Geschäftsführer</p>
            </div>
          </ScaleIn>

          <SlideFromRight className="flex items-center">
            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                NP Solution GmbH wurde von Nikola Prvujkic gegründet. Als Automatiker EFZ bringt
                er über sieben Jahre Erfahrung in der Inbetriebnahme sowie bei elektrischen
                Arbeiten, Umbauten und Erweiterungen an Maschinen und Industrieanlagen mit.
              </p>
              <p>
                Diese praktische Erfahrung bildet die Basis von NP Solution GmbH. Ergänzt wird
                sie durch moderne digitale Werkzeuge und Smart Automation – immer mit dem Ziel,
                Abläufe einfacher, zuverlässiger und effizienter zu machen.
              </p>
            </div>
          </SlideFromRight>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-5" stagger={0.15}>
          <StaggerItem>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <EducationIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Technischer Hintergrund</h3>
                  <p className="text-sm text-brand/80 mt-0.5">Automation & Industrie</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Automatiker EFZ",
                  "Über 7 Jahre Erfahrung in Automation und Inbetriebnahme",
                  "Praxis direkt an Maschinen und Industrieanlagen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-md bg-brand/10 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-[#111] border border-brand/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <InitiativeIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Digitale Kompetenz</h3>
                  <p className="text-sm text-brand/80 mt-0.5">Smart Automation</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Automatisierung wiederkehrender Abläufe",
                  "Einfache digitale Tools für konkrete Aufgaben",
                  "Daten und Schnittstellen zwischen bestehenden Systemen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-md bg-brand/10 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
