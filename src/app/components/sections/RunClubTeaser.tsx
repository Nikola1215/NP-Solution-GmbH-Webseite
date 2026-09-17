import Link from "next/link";
import { FadeUp } from "../motion-primitives";
import { ArrowRight } from "../icons";

export default function RunClubTeaser() {
  return (
    <section className="py-16 px-6 border-b border-white/5 bg-gradient-to-br from-[#1a0f05] via-[#0c0c0c] to-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-2xl border border-brand/20 bg-[#111]/60 px-8 py-10 md:px-12 md:py-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                NP Run Club · Coming soon
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Mittagspause. Laufschuhe an.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Der NP Run Club bringt Menschen aus dem Industriegebiet Schaan und der Umgebung
                für gemeinsame Lunch Runs zusammen.
              </p>
            </div>
            <Link
              href="/run-club"
              className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_-8px_#FF5F00]"
            >
              Auf die Warteliste <ArrowRight />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
