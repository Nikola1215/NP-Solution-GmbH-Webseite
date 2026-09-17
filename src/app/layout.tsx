import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://np-solution.li";
const SITE_NAME = "NP Solution GmbH";
const SITE_DESCRIPTION =
  "NP Solution GmbH unterstützt Industrieunternehmen in Liechtenstein und der Schweiz bei Inbetriebnahme, elektrischen Arbeiten, Umbauten und Revisionen an Maschinen und Anlagen – ergänzt durch Smart Automation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NP Solution GmbH – Industrieservice & Automation in Liechtenstein",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "NP Solution GmbH – Industrieservice & Automation in Liechtenstein",
    description: SITE_DESCRIPTION,
  },
};

// LocalBusiness-Schema: nur belegte Angaben (siehe BRIEFING.md Punkt 26), keine
// erfundenen Bewertungen/Kennzahlen. Auf allen Seiten eingebunden, da es die
// gesamte Unternehmensentitaet beschreibt, nicht nur die Startseite.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: "info@np-solution.li",
  telephone: "+41787043686",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Undera Forst 16",
    postalCode: "9494",
    addressLocality: "Schaan",
    addressCountry: "LI",
  },
  areaServed: ["Liechtenstein", "Schweiz"],
  founder: {
    "@type": "Person",
    name: "Nikola Prvujkic",
  },
  sameAs: ["https://www.instagram.com/np_solution.li"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#090909] text-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
