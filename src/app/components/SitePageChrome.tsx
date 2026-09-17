import Link from "next/link";

type LegalLink = "impressum" | "datenschutz";

export default function SitePageChrome({
  children,
  activeFooterLink,
}: {
  children: React.ReactNode;
  activeFooterLink?: LegalLink;
}) {
  const footerLinkClass = (key: LegalLink) =>
    activeFooterLink === key
      ? "text-brand/70 hover:text-brand transition-colors"
      : "hover:text-gray-400 transition-colors";

  return (
    <div className="bg-[#090909] text-white min-h-screen font-sans">
      <header className="border-b border-white/5 bg-[#090909]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative overflow-hidden w-[140px] h-[72px] md:w-[180px] md:h-[93px]">
              <img
                src="/logo.svg"
                alt="NP Solution GmbH"
                className="absolute h-auto w-[140px] top-[-39px] md:w-[180px] md:top-[-50px]"
              />
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">{children}</main>

      <footer className="border-t border-white/5 py-10 px-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 NP Solution GmbH · Schaan, Liechtenstein</p>
          <div className="flex gap-5">
            <Link href="/impressum" className={footerLinkClass("impressum")}>Impressum</Link>
            <Link href="/datenschutz" className={footerLinkClass("datenschutz")}>Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
