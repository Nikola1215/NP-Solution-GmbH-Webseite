// Platzhalter fuer echtes Bildmaterial (siehe BRIEFING.md Punkt 5 / 26).
// Sobald Fotos vorhanden sind: durch next/image ersetzen, Label als Alt-Text-Vorschlag nutzen.
export default function ImagePlaceholder({
  label,
  className = "",
  overlay = false,
}: {
  label: string;
  className?: string;
  /** true: halbtransparenter Overlay statt deckender Flaeche (z.B. ueber einer Sekundaeranimation) */
  overlay?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-white/10 ${overlay ? "bg-black/35" : "bg-[#111]"} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center px-6">
        <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 21h18a1.5 1.5 0 0 0 1.5-1.5V4.5A1.5 1.5 0 0 0 21 3H3a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 3 21ZM11.25 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
        <span className="text-xs text-white/40 font-medium tracking-wide">{label}</span>
      </div>
    </div>
  );
}
