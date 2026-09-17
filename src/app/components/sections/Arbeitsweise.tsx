import { FadeUp, StaggerContainer, StaggerItem } from "../motion-primitives";
import { ArrowRight } from "../icons";

const STEPS: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: "Verstehen",
    desc: "Aufgabenstellung, Anlage und Anforderungen verstehen.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Abstimmen",
    desc: "Vorgehen, Schnittstellen und Umfang sauber definieren.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    title: "Umsetzen",
    desc: "Arbeiten zuverlässig und praxisnah durchführen.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 0 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Übergeben",
    desc: "Prüfen, dokumentieren und sauber abschliessen.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function Arbeitsweise() {
  return (
    <section className="py-28 px-6 bg-[#0c0c0c] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Ablauf
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">So arbeiten wir</h2>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-2 [grid-auto-rows:1fr] gap-4 md:flex md:flex-row md:items-stretch md:gap-0" stagger={0.15}>
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title} className="h-full md:flex md:flex-row md:items-stretch md:flex-1">
              <div className="h-full w-full bg-[#111] border border-white/5 rounded-2xl p-5 md:p-7 flex flex-col items-center text-center hover:border-brand/20 transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-4 shrink-0">
                  {step.icon}
                </div>
                <div className="text-xs text-brand font-mono font-medium mb-2">0{i + 1}</div>
                <h3 className="font-bold text-sm md:text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 shrink-0">
                  <ArrowRight className="w-5 h-5 text-brand/25" />
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
