import ServiceDetailSection from "./ServiceDetailSection";

const FEATURES: [string, string][] = [
  ["Inbetriebnahme", "Unterstützung bei der elektrischen und funktionalen Inbetriebnahme von Maschinen und Anlagen."],
  ["Umbauten & Erweiterungen", "Anpassung und Erweiterung bestehender Maschinen und Anlagen für neue Anforderungen."],
  ["Revisionen & Service", "Technische Revisionen, Prüfungen und Arbeiten zur Sicherstellung der Anlagenverfügbarkeit."],
  ["Anlagenverschiebungen", "Unterstützung bei Demontage, Verschiebung, Wiederaufbau und erneuter Inbetriebnahme."],
  ["Elektrische Arbeiten", "Verdrahtung, Anpassungen und elektrische Arbeiten direkt an Maschinen und Anlagen."],
  ["Dokumentation", "Saubere Protokollierung und Dokumentation der ausgeführten Arbeiten."],
];

export default function LeistungenDetail() {
  return (
    <ServiceDetailSection
      id="leistungen-detail"
      number="01"
      tag="Industrieservice"
      title="Industrieservice & Automation"
      description="NP Solution unterstützt Anlagenbauer und Industrieunternehmen bei Arbeiten direkt an Maschinen und Produktionsanlagen – von der elektrischen Umsetzung bis zur erfolgreichen Inbetriebnahme."
      features={FEATURES}
    />
  );
}
