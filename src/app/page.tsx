import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import IndustrieserviceOverview from "./components/sections/IndustrieserviceOverview";
import LeistungenDetail from "./components/sections/LeistungenDetail";
import Projekte from "./components/sections/Projekte";
import SmartAutomation from "./components/sections/SmartAutomation";
import UeberNpSolution from "./components/sections/UeberNpSolution";
import Arbeitsweise from "./components/sections/Arbeitsweise";
import Standort from "./components/sections/Standort";
import RunClubTeaser from "./components/sections/RunClubTeaser";
import ProjektCta from "./components/sections/ProjektCta";
import Kontakt from "./components/sections/Kontakt";
import SiteFooter from "./components/sections/SiteFooter";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <div className="bg-[#090909] text-white font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <IndustrieserviceOverview />
      <LeistungenDetail />
      <Projekte />
      <SmartAutomation />
      <UeberNpSolution />
      <Arbeitsweise />
      <Standort />
      <RunClubTeaser />
      <ProjektCta />
      <Kontakt />
      <WhatsAppButton />
      <CookieBanner />
      <SiteFooter />
    </div>
  );
}
