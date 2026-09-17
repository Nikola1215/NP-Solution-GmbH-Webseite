import Link from "next/link";
import { FadeUp } from "../motion-primitives";
import { ArrowRight } from "../icons";
import { CONTACT_HREF } from "../nav-links";

export default function ProjektCta() {
  return (
    <section className="py-20 px-6 border-b border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Projekt im Kopf?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Kommen Sie auf einen Espresso in Schaan vorbei.
          </p>
          <Link
            href={CONTACT_HREF}
            className="inline-flex items-center gap-2 border border-brand/30 hover:border-brand text-brand font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Termin vereinbaren <ArrowRight />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
