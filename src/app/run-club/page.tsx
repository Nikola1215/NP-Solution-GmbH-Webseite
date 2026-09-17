import type { Metadata } from "next";
import SitePageChrome from "../components/SitePageChrome";
import RunClubForm from "../components/RunClubForm";

const TITLE = "NP Run Club – Lunch Runs in Schaan";
const DESCRIPTION =
  "Der NP Run Club bringt Menschen aus dem Industriegebiet Schaan und der Umgebung für gemeinsame Lunch Runs zusammen. Jetzt auf die Warteliste eintragen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/run-club" },
  openGraph: {
    url: "/run-club",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RunClubPage() {
  return (
    <SitePageChrome>
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-widest uppercase">
          NP Run Club · Coming soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Mittagspause.
          <br />
          Laufschuhe an.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          Der NP Run Club bringt Menschen aus dem Industriegebiet Schaan und der Umgebung für
          gemeinsame Lunch Runs zusammen.
        </p>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white mb-1 text-center">Auf die Warteliste</h2>
        <p className="text-sm text-gray-500 mb-8 text-center">Ich bin dabei, sobald es losgeht.</p>
        <RunClubForm />
      </div>
    </SitePageChrome>
  );
}
