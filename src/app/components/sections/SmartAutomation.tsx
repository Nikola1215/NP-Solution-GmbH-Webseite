import ServiceDetailSection from "./ServiceDetailSection";

const FEATURES: [string, string][] = [
  ["Workflow-Automatisierung", "Wiederkehrende Abläufe automatisieren, damit Zeit für das Wesentliche bleibt."],
  ["Interne Webtools", "Schlanke interne Tools für konkrete betriebliche Aufgaben."],
  ["Automatisierte Dokumente", "Wiederkehrende Dokumente automatisch erstellen statt manuell auszufüllen."],
  ["Daten & Schnittstellen", "Bestehende Systeme verbinden und Daten dort verfügbar machen, wo sie gebraucht werden."],
];

export default function SmartAutomation() {
  return (
    <ServiceDetailSection
      id="smart-automation"
      number="02"
      tag="Smart Automation"
      title="Kleine Tools. Spürbare Wirkung."
      subheadline="Nicht jeder ineffiziente Prozess braucht ein grosses Softwareprojekt."
      description="NP Solution entwickelt schlanke digitale Werkzeuge für konkrete Abläufe im Unternehmen – mit dem Ziel, Zeit zu sparen, Fehler zu reduzieren und wiederkehrende Arbeiten zu vereinfachen."
      features={FEATURES}
      reverse
    />
  );
}
