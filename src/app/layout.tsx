import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NP Solution GmbH – Industrieservice & Automation in Liechtenstein",
  description:
    "NP Solution GmbH unterstützt Industrieunternehmen in Liechtenstein und der Schweiz bei Inbetriebnahme, elektrischen Arbeiten, Umbauten und Revisionen an Maschinen und Anlagen – ergänzt durch Smart Automation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#090909] text-white min-h-screen">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
