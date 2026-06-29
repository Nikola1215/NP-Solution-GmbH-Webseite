import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ParticleNetwork from "./components/ParticleNetwork";
import HeroHeadline from "./components/HeroHeadline";
import {
  HeroFade,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverLift,
} from "./components/motion-primitives";
import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";

// ─── Icons ────────────────────────────────────────────────────────────────────

function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ─── Hero illustration ────────────────────────────────────────────────────────


// ─── Data ─────────────────────────────────────────────────────────────────────

const automationFeatures: [string, string][] = [
  ["Inbetriebnahme von Maschinen",    "Fachgerechte Inbetriebnahme, Parametrierung und Unterstützung bei neuen oder bestehenden Anlagen."],
  ["Erweiterungen & Modernisierungen","Anpassung und Erweiterung bestehender Systeme für neue Anforderungen und höhere Effizienz."],
  ["Revisionen & Wartung",            "Präventive Wartung und technische Revisionen für maximale Anlagenverfügbarkeit."],
  ["Technische Beratung",             "Unterstützung bei technischen Fragestellungen, Projektplanung und Optimierungen."],
];

const digitalisierungFeatures: [string, string][] = [
  ["KI-gestützte Workflow-Automatisierung","Automatisierung repetitiver Aufgaben und Prozesse durch moderne KI-Technologien."],
  ["Digitale Prozessoptimierung",          "Analyse bestehender Abläufe und Entwicklung effizienterer digitaler Prozesse."],
  ["Systemintegration",                    "Verbindung bestehender Softwarelösungen und Plattformen für einen nahtlosen Informationsfluss."],
  ["Individuelle Digitalisierungslösungen","Massgeschneiderte Konzepte für Unternehmen, die ihre Abläufe modernisieren möchten."],
];

const marketingFeatures: [string, string][] = [
  ["Webseiten-Entwicklung","Moderne, schnelle und suchmaschinenoptimierte Webseiten."],
  ["Content Creation",     "Professionelle Inhalte für Webseiten, Social Media und digitale Kommunikation."],
  ["Video-Produktion",     "Authentische Unternehmensvideos für Marketing, Recruiting und Social Media."],
  ["Komplettlösungen",     "Strategie, Umsetzung und Betreuung aus einer Hand."],
];

const prozessSteps: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: "Beratung",
    desc: "Am liebsten bei mir vor Ort im schönen Schaan auf einen Espresso.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Konzept",
    desc: "Entwicklung einer individuellen Lösung passend zu Ihren Anforderungen.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "Umsetzung",
    desc: "Effiziente und zuverlässige Realisierung des Projekts.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 0 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Support",
    desc: "Persönliche Betreuung und Unterstützung auch nach Projektabschluss.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="h-full bg-[#111] border border-white/5 rounded-xl p-5 hover:border-brand/25 transition-colors group">
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand/20 transition-colors">
          <CheckIcon />
        </div>
        <div>
          <p className="font-semibold text-white mb-1 text-sm">{title}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceSection({
  id, number, tag, title, subheadline, description, features, reverse = false,
}: {
  id: string; number: string; tag: string; title: string;
  subheadline?: string; description: string;
  features: [string, string][]; reverse?: boolean;
}) {
  const TextCol = reverse ? SlideFromRight : SlideFromLeft;
  const GridCol = reverse ? SlideFromLeft  : SlideFromRight;
  return (
    <section id={id} className="py-28 px-6 border-b border-white/5">
      <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}>
        <TextCol className="flex-1 space-y-5 lg:pt-2">
          <div className="flex items-center gap-3">
            <span className="text-brand text-sm font-mono font-medium">{number}</span>
            <span className="w-8 h-px bg-brand/40" />
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">{tag}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{title}</h2>
          {subheadline && <p className="text-white/70 text-lg font-medium leading-snug">{subheadline}</p>}
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
          <a href="#kontakt" className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all">
            Kontakt aufnehmen <ArrowRight />
          </a>
        </TextCol>
        <StaggerContainer className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.1} delay={0.15}>
          {features.map(([t, d]) => (
            <StaggerItem key={t}>
              <HoverLift className="h-full">
                <FeatureCard title={t} desc={d} />
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#090909] text-white font-sans">

      <Navbar />

      {/* ── Hero ── */}
      <section className="dot-bg min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">

          {/* Split row: text left, illustration right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 mb-20">

            {/* Text */}
            <div className="flex-1 max-w-2xl">
              <HeroFade delay={0.15} y={-12}>
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  Liechtenstein & Schweiz · Über 7 Jahre Erfahrung
                </div>
              </HeroFade>
              <HeroHeadline />
              <HeroFade delay={0.5}>
                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                  Die NP Solution GmbH unterstützt Unternehmen in Liechtenstein und der Schweiz in
                  den Bereichen Automation, Systemtechnik, Digitalisierung und Marketing. Von
                  technischen Projekten über intelligente Prozessautomatisierung bis hin zum
                  professionellen Unternehmensauftritt erhalten Sie individuelle Lösungen aus einer
                  Hand.
                </p>
              </HeroFade>
              <HeroFade delay={0.7}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="flex items-center justify-center gap-2 bg-brand hover:bg-[#e05400] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_-8px_#FF5F00]"
                  >
                    Projekt starten <ArrowRight />
                  </a>
                  <a
                    href="#automation"
                    className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-medium px-7 py-3.5 rounded-xl transition-colors"
                  >
                    Leistungen ansehen
                  </a>
                </div>
              </HeroFade>
            </div>

            {/* Particle animation – desktop only, offset to align with headline */}
            <div className="hidden lg:flex flex-1 items-start justify-end min-w-0 mt-[52px]">
              <ParticleNetwork />
            </div>
          </div>

          {/* KPIs */}
          <StaggerContainer
            className="pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
            stagger={0.12}
            delay={0.1}
          >
            {(
              [
                ["7+",         "Jahre Berufserfahrung"],
                ["FL & CH",    "Regional tätig"],
                ["Persönlich", "Direkter Ansprechpartner"],
                ["Individuell","Massgeschneiderte Lösungen"],
              ] as [string, string][]
            ).map(([num, label]) => (
              <StaggerItem key={num}>
                <div className="text-3xl font-bold text-brand mb-1">{num}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Service Overview Cards ── */}
      <section className="py-20 px-6 bg-[#0c0c0c] border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-5" stagger={0.15}>
            {(
              [
                {
                  href: "#automation", label: "01",
                  title: "Automation & Systemtechnik",
                  desc:  "Planung, Inbetriebnahme, Erweiterung, Verschiebung und Optimierung von Maschinen, Anlagen und technischen Systemen.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  ),
                },
                {
                  href: "#digitalisierung", label: "02",
                  title: "Smart Automation & Digitalisierung",
                  desc:  "Automatisierte Workflows, digitale Prozesse und intelligente Lösungen für effizientere Unternehmensabläufe.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                  ),
                },
                {
                  href: "#marketing", label: "03",
                  title: "Digitales Marketing",
                  desc:  "Professionelle Webseiten, Content Creation und digitale Strategien für mehr Sichtbarkeit und Wachstum.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
                    </svg>
                  ),
                },
              ] as { href: string; label: string; title: string; desc: string; icon: React.ReactNode }[]
            ).map(({ href, label, title, desc, icon }) => (
              <StaggerItem key={href}>
                <HoverLift className="h-full">
                  <a href={href}
                    className="group h-full flex flex-col p-7 rounded-2xl border border-white/5 hover:border-brand/30 bg-[#111]/60 hover:bg-[#111] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/20 transition-colors">
                      {icon}
                    </div>
                    <div className="text-xs text-brand font-mono font-medium mb-2">{label}</div>
                    <h3 className="text-lg font-semibold mb-2.5">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-brand text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Mehr erfahren <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Über mich ── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          {/* Section label + heading */}
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-brand text-xs font-semibold tracking-widest uppercase">Über mich</span>
              <span className="w-8 h-px bg-brand/40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Wer steckt hinter NP Solution?
            </h2>
          </FadeUp>

          {/* Portrait + Text */}
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 mb-14">

            {/* Left: portrait photo + name */}
            <ScaleIn className="flex flex-col items-center gap-5">
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
                <p className="text-sm text-brand">Gründer NP Solution GmbH</p>
              </div>
            </ScaleIn>

            {/* Right: bio text */}
            <SlideFromRight className="flex items-center">
              <p className="text-gray-400 text-lg leading-relaxed">
                Als ausgebildeter Automatiker mit über sieben Jahren Berufserfahrung verbinde ich
                technisches Fachwissen mit modernen digitalen Lösungen. Mein Schwerpunkt liegt in
                der Automation und Systemtechnik – von Inbetriebnahmen und Anlagenoptimierungen bis
                hin zu technischen Erweiterungen und Support. Gleichzeitig beschäftige ich mich
                intensiv mit Digitalisierung, künstlicher Intelligenz und modernen
                Unternehmensprozessen. Dadurch entstehen Lösungen, die nicht nur technisch
                funktionieren, sondern Unternehmen auch effizienter und zukunftssicher machen.
                Mein Anspruch ist einfach: Persönliche Betreuung, saubere Umsetzung und Lösungen,
                die einen echten Mehrwert schaffen.
              </p>
            </SlideFromRight>
          </div>

          {/* Two pillars */}
          <StaggerContainer className="grid md:grid-cols-2 gap-5" stagger={0.15}>

            {/* Ausbildung */}
            <StaggerItem>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 0 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Ausbildung</h3>
                  <p className="text-sm text-brand/80 mt-0.5">Gelernter Automatiker EFZ</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Inbetriebnahme und Optimierung von Maschinen",
                  "Über 7 Jahre Berufserfahrung",
                  "Technisches Verständnis und praxisnahe Lösungen",
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

            {/* Eigeninitiative */}
            <StaggerItem>
            <div className="bg-[#111] border border-brand/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Eigeninitiative</h3>
                  <p className="text-sm text-brand/80 mt-0.5">Digitalisierung & Innovation</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Automatisierung von Geschäftsprozessen",
                  "KI-gestützte Workflows und digitale Systeme",
                  "Webseiten, Content und digitale Strategien",
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

      {/* ── Service Detail Sections ── */}
      <ServiceSection
        id="automation" number="01" tag="Systemtechnik"
        title="Automation & Systemtechnik"
        description="Als ausgebildeter Automatiker unterstütze ich Unternehmen bei der Inbetriebnahme, Erweiterung, Verschiebung, Optimierung und Wartung von Maschinen und Anlagen. Ob einzelne Systeme oder komplexe Produktionsumgebungen – ich begleite Projekte zuverlässig von der Umsetzung bis zur erfolgreichen Inbetriebnahme."
        features={automationFeatures}
      />
      <ServiceSection
        id="digitalisierung" number="02" tag="Smart Automation"
        title="Smart Automation & Digitalisierung"
        subheadline="Digitale Prozesse schaffen Zeit für das Wesentliche."
        description="Ich unterstütze Unternehmen dabei, wiederkehrende Abläufe zu automatisieren, Informationen intelligent zu verarbeiten und digitale Werkzeuge effizient einzusetzen."
        features={digitalisierungFeatures}
        reverse
      />
      <ServiceSection
        id="marketing" number="03" tag="Marketing"
        title="Digitales Marketing aus einer Hand"
        subheadline="Ein professioneller Auftritt schafft Vertrauen, Sichtbarkeit und neue Kunden."
        description="Von der Strategie über die Umsetzung bis zur laufenden Betreuung unterstütze ich Unternehmen dabei, ihre Leistungen professionell zu präsentieren und digital sichtbar zu werden."
        features={marketingFeatures}
      />

      {/* ── Prozess ── */}
      <section className="py-28 px-6 bg-[#0c0c0c] border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Prozess
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">So arbeite ich</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 [grid-auto-rows:1fr] gap-4 md:flex md:flex-row md:items-stretch md:gap-0" stagger={0.15}>
            {prozessSteps.map((step, i) => (
              <StaggerItem key={step.title} className="h-full md:flex md:flex-row md:items-stretch md:flex-1">
                <div className="h-full w-full bg-[#111] border border-white/5 rounded-2xl p-5 md:p-7 flex flex-col items-center text-center hover:border-brand/20 transition-colors">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-4 shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-xs text-brand font-mono font-medium mb-2">0{i + 1}</div>
                  <h3 className="font-bold text-sm md:text-base mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < prozessSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-3 shrink-0">
                    <ArrowRight className="w-5 h-5 text-brand/25" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Standort ── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-[#111] border border-brand/15 rounded-2xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Lokal verwurzelt. Regional tätig.
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Ihr regionaler Partner</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  NP Solution GmbH – ansässig in Schaan, Liechtenstein. Tätig in Liechtenstein
                  und der Schweiz.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                <div className="flex items-center gap-3 bg-[#090909] border border-white/5 rounded-xl px-6 py-3.5">
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span className="text-sm font-medium">Liechtenstein</span>
                </div>
                <div className="flex items-center gap-3 bg-[#090909] border border-white/5 rounded-xl px-6 py-3.5">
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span className="text-sm font-medium">Schweiz</span>
                </div>
                <div className="flex items-center gap-3 bg-brand/10 border border-brand/20 rounded-xl px-6 py-3.5">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-sm font-medium text-brand">Schaan, FL-9494</span>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="pl-6 mt-10">
              <iframe
                src="https://www.google.com/maps?q=Undera+Forst+16,+9494+Schaan,+Liechtenstein&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NP Solution GmbH – Standort Schaan"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 95, 0, 0.3)",
                  filter: "grayscale(100%) invert(92%) contrast(89%)",
                  display: "block",
                }}
              />
              <p className="mt-3 text-xs text-gray-600 text-center">
                © Google Maps – Standort NP Solution GmbH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" className="py-28 px-6 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
              Kontakt
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bereit für den nächsten <span className="text-brand">Schritt</span>?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie Automation, Digitalisierung oder Marketing
              Ihr Unternehmen voranbringen können.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">

            {/* Adresse */}
            <a
              href="https://www.google.com/maps?q=Undera+Forst+16,+9494+Schaan,+Liechtenstein"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] border border-white/5 hover:border-brand/50 rounded-xl p-6 space-y-3 transition-colors block"
            >
              <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Adresse</p>
              <address className="not-italic text-sm text-gray-300 leading-relaxed">
                NP Solution GmbH<br />
                Undera Forst 16<br />
                9494 Schaan<br />
                Liechtenstein
              </address>
            </a>

            {/* WhatsApp & Telefon */}
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

            {/* E-Mail */}
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
            </a>

          </div>

          <ContactForm />
        </div>
      </section>

      <WhatsAppButton />
      <CookieBanner />

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="relative overflow-hidden w-[120px] h-[62px]">
              <img
                src="/logo.svg"
                alt="NP Solution GmbH"
                className="absolute h-auto w-[120px] top-[-33px]"
              />
            </div>
            <address className="not-italic text-xs text-gray-600">
              Undera Forst 16 · 9494 Schaan · Liechtenstein
            </address>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
            <a href="#automation"      className="hover:text-white transition-colors">Systemtechnik</a>
            <a href="#digitalisierung" className="hover:text-white transition-colors">Smart Automation</a>
            <a href="#marketing"       className="hover:text-white transition-colors">Marketing</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-600">© 2026 NP Solution GmbH</p>
            <div className="flex gap-4 text-xs text-gray-600">
              <Link href="/impressum"   className="hover:text-gray-400 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-gray-400 transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
