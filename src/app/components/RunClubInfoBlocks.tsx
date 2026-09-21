// Gemeinsam genutzt vom Run-Club-Teaser auf der Startseite und der /run-club-Seite,
// damit beide Stellen immer dieselben Infos zeigen (siehe RunClubTeaser.tsx und
// run-club/page.tsx).
const INFO: { value: string; label: string }[] = [
  { value: "2× pro Woche", label: "Lunch Runs (geplant)" },
  { value: "11:30–12:45", label: "geplantes Zeitfenster" },
  { value: "Schaan", label: "Industriegebiet & Umgebung" },
];

export default function RunClubInfoBlocks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {INFO.map((item) => (
          <div key={item.value} className="rounded-xl border border-white/10 bg-[#090909]/40 px-4 py-3">
            <div className="text-sm font-semibold text-brand">{item.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Die genauen Tage, Strecken und Abläufe werden aktuell noch definiert.
      </p>
    </div>
  );
}
