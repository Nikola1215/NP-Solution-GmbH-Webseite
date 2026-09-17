import Link from "next/link";
import HeroHeadline from "../HeroHeadline";
import ParticleNetwork from "../ParticleNetwork";
import ImagePlaceholder from "../ImagePlaceholder";
import { HeroFade } from "../motion-primitives";
import { ArrowRight } from "../icons";
import { CONTACT_HREF } from "../nav-links";

export default function Hero() {
  return (
    <section className="dot-bg min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 mb-20">
          <div className="flex-1 max-w-2xl">
            <HeroFade delay={0.15} y={-12}>
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Liechtenstein & Schweiz · Über 7 Jahre Erfahrung
              </div>
            </HeroFade>
            <HeroHeadline />
            <HeroFade delay={0.5}>
              <p className="text-xl text-gray-400 leading-relaxed mb-3">
                NP Solution unterstützt Industrieunternehmen bei Inbetriebnahmen, elektrischen
                Arbeiten, Umbauten, Revisionen und technischen Anpassungen – direkt an der Anlage.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-10">
                Ergänzt durch smarte digitale Lösungen für Prozesse, bei denen Zeit und Fehler
                reduziert werden können.
              </p>
            </HeroFade>
            <HeroFade delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Bildfläche rechts: dominiert visuell die Industrie-Identität (Platzhalter, siehe BRIEFING.md Punkt 5) */}
          <div className="hidden lg:block flex-1 min-w-0 mt-[52px] w-full">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0">
                <ParticleNetwork />
              </div>
              <ImagePlaceholder
                label="Bildplatzhalter – Industrieanlage / Inbetriebnahme"
                className="absolute inset-0"
                overlay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
