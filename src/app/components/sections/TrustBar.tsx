import { StaggerContainer, StaggerItem } from "../motion-primitives";

const TRUST_ITEMS: [string, string][] = [
  ["7+ Jahre", "Automationserfahrung"],
  ["Liechtenstein & Schweiz", "Regional tätig"],
  ["Direkter Ansprechpartner", "Kurze Entscheidungswege"],
  ["Vor Ort an der Anlage", "Praxisnahe Umsetzung"],
];

export default function TrustBar() {
  return (
    <section className="py-12 px-6 bg-[#0c0c0c] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger={0.1}>
          {TRUST_ITEMS.map(([title, label]) => (
            <StaggerItem key={title}>
              <div className="text-lg md:text-xl font-bold text-brand mb-1 leading-snug">{title}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
