"use client";

import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  level: string;
};

type Errors = Partial<Record<"firstName" | "lastName" | "email", string>>;

const LAUFNIVEAUS = ["Einsteiger", "Fortgeschritten", "Ambitioniert"];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_RUNCLUB_ID;

const field =
  "w-full bg-[#1A1A20] border border-[#2E2E34] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-150 focus:border-brand";

export default function RunClubForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", company: "", level: "",
  });
  const [errors, setErrors]     = useState<Errors>({});
  const [loading, setLoading]   = useState(false);
  const [sent, setSent]         = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function set<K extends keyof FormData>(key: K, val: string) {
    setForm(f => ({ ...f, [key]: val }));
    if (key in errors) setErrors(e => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "Vorname ist erforderlich";
    if (!form.lastName.trim())  e.lastName  = "Nachname ist erforderlich";
    if (!form.email.trim())     e.email     = "E-Mail ist erforderlich";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                e.email     = "Ungültige E-Mail-Adresse";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!FORMSPREE_ID || !validate()) return;

    setLoading(true);
    setApiError(null);

    const payload = new FormData();
    payload.append("firstName", form.firstName);
    payload.append("lastName", form.lastName);
    payload.append("email", form.email);
    payload.append("company", form.company);
    payload.append("level", form.level);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        setApiError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
      } else {
        setSent(true);
      }
    } catch {
      setApiError("Netzwerkfehler. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  }

  // Formspree-ID fuer den Run Club noch nicht konfiguriert (siehe .env.example) –
  // Formular bewusst nicht anzeigen, statt einen Absende-Fehler zu riskieren.
  if (!FORMSPREE_ID) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-14 px-8">
        <div className="w-16 h-16 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Anmeldung bald möglich</h3>
        <p className="text-gray-400">Die Warteliste für den NP Run Club ist noch nicht freigeschaltet. Schau bald wieder vorbei.</p>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-14 px-8">
        <div className="w-16 h-16 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Anmeldung erhalten!</h3>
        <p className="text-gray-400">Danke fürs Dabeisein. Wir melden uns, sobald es losgeht.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-[640px] mx-auto space-y-5">

      {/* Honeypot – Formspree erkennt _gotcha automatisch */}
      <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden="true" />

      {/* Row 1: Vorname + Nachname */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Vorname <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            placeholder="Ihr Vorname"
            value={form.firstName}
            onChange={e => set("firstName", e.target.value)}
            className={`${field}${errors.firstName ? " border-red-500" : ""}`}
          />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Nachname <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            placeholder="Ihr Nachname"
            value={form.lastName}
            onChange={e => set("lastName", e.target.value)}
            className={`${field}${errors.lastName ? " border-red-500" : ""}`}
          />
          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          E-Mail <span className="text-brand">*</span>
        </label>
        <input
          type="email"
          placeholder="ihre@email.com"
          value={form.email}
          onChange={e => set("email", e.target.value)}
          className={`${field}${errors.email ? " border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Row 2: Unternehmen + Laufniveau */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Unternehmen <span className="text-gray-600 text-xs">(optional)</span></label>
          <input
            type="text"
            placeholder="Ihr Unternehmen"
            value={form.company}
            onChange={e => set("company", e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Laufniveau <span className="text-gray-600 text-xs">(optional)</span></label>
          <select
            value={form.level}
            onChange={e => set("level", e.target.value)}
            className={`${field} cursor-pointer`}
            style={{ colorScheme: "dark" }}
          >
            <option value="">Keine Angabe</option>
            {LAUFNIVEAUS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {apiError && (
        <div role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {apiError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-brand hover:bg-brand-hover disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_-8px_#FF5F00] w-full sm:w-auto justify-center"
      >
        {loading ? "Wird gesendet…" : <>Ich bin dabei <span aria-hidden>→</span></>}
      </button>
    </form>
  );
}
