import Link from "next/link";
import Image from "next/image";
import HeroHeadline from "../HeroHeadline";
import { HeroFade } from "../motion-primitives";
import { ArrowRight } from "../icons";
import { CONTACT_HREF } from "../nav-links";

// ─── Hero-Bild ──────────────────────────────────────────────────────────────
// Aktuell noch kein echtes Foto vorhanden – der Hero ist deshalb bewusst als
// zentriertes Text-Layout ohne Bildflaeche gestaltet (siehe BRIEFING.md Punkt 5/26).
//
// Sobald ein Foto vorliegt:
//   1. Datei unter public/images/hero.jpg ablegen (Hochformat/Portrait-Format,
//      mind. 1200x1500px, JPG oder WebP)
//   2. HERO_IMAGE_SRC unten von null auf "/images/hero.jpg" setzen
// Der zweispaltige Aufbau (Text links, Bildflaeche rechts ueber die volle Hoehe
// der Hero-Spalte) erscheint dann automatisch wieder – keine weiteren
// Code-Aenderungen noetig.
const HERO_IMAGE_SRC: string | null = null;

export default function Hero() {
  const hasImage = Boolean(HERO_IMAGE_SRC);

  return (
    <section className="dot-bg min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div
          className={
            hasImage
              ? "flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-8 mb-20"
              : "flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
          }
        >
          <div className={hasImage ? "flex-1 max-w-2xl" : "w-full flex flex-col items-center"}>
            <HeroFade delay={0.15} y={-12}>
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Liechtenstein & Schweiz · Über 7 Jahre Erfahrung
              </div>
            </HeroFade>
            <HeroHeadline />
            <HeroFade delay={0.5}>
              <p className={`text-xl text-gray-400 leading-relaxed mb-3 ${hasImage ? "" : "max-w-2xl"}`}>
                NP Solution GmbH unterstützt Anlagenbauer und Industrieunternehmen bei
                Inbetriebnahmen, elektrischen Arbeiten, Umbauten, Revisionen und technischen
                Anpassungen – direkt vor Ort an der Anlage.
              </p>
              <p className={`text-sm text-gray-500 leading-relaxed mb-10 ${hasImage ? "" : "max-w-2xl"}`}>
                Zusätzlich entwickeln wir einfache digitale Lösungen, die Abläufe vereinfachen,
                Zeit sparen und Fehler reduzieren – mit oder ohne künstliche Intelligenz.
              </p>
            </HeroFade>
            <HeroFade delay={0.7}>
              <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto ${hasImage ? "" : "justify-center"}`}>
                <Link
                  href={CONTACT_HREF}
                  className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_-8px_#FF5F00]"
                >
                  Projekt besprechen <ArrowRight />
                </Link>
                <Link
                  href="/#leistungen"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-medium px-7 py-3.5 rounded-xl transition-colors"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </HeroFade>
          </div>

          {/* Bildfläche rechts: erscheint nur, wenn HERO_IMAGE_SRC oben gesetzt ist */}
          {hasImage && (
            <div className="hidden lg:flex flex-1 min-w-0 w-full">
              <div className="relative w-full h-full min-h-[520px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={HERO_IMAGE_SRC as string}
                  alt="NP Solution GmbH – Industrieanlage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
