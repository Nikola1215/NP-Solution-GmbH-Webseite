"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const SUBJECTS = [
  "Automation & Systemtechnik",
  "Smart Automation & Digitalisierung",
  "Digitales Marketing",
  "Allgemeine Anfrage",
];

const field =
  "w-full bg-[#1A1A20] border border-[#2E2E34] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-150 focus:border-brand";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", subject: SUBJECTS[3], message: "",
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
    if (!form.name.trim())    e.name    = "Name ist erforderlich";
    if (!form.email.trim())   e.email   = "E-Mail ist erforderlich";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = "Ungültige E-Mail-Adresse";
    if (!form.message.trim()) e.message = "Nachricht ist erforderlich";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError(null);

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("subject", form.subject);
    payload.append("message", form.message);

    try {
      const res = await fetch("https://formspree.io/f/xkolzegd", {
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

  if (sent) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-14 px-8">
        <div className="w-16 h-16 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Nachricht gesendet!</h3>
        <p className="text-gray-400">Vielen Dank! Ich melde mich so schnell wie möglich.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-[640px] mx-auto space-y-5">

      {/* Honeypot – Formspree erkennt _gotcha automatisch */}
      <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden="true" />

      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            placeholder="Ihr Name"
            value={form.name}
            onChange={e => set("name", e.target.value)}
            className={`${field}${errors.name ? " border-red-500" : ""}`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
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
      </div>

      {/* Row 2: Phone + Subject */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Telefon <span className="text-gray-600 text-xs">(optional)</span></label>
          <input
            type="tel"
            placeholder="+41 XX XXX XX XX"
            value={form.phone}
            onChange={e => set("phone", e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Betreff</label>
          <select
            value={form.subject}
            onChange={e => set("subject", e.target.value)}
            className={`${field} cursor-pointer`}
            style={{ colorScheme: "dark" }}
          >
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Nachricht <span className="text-brand">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen…"
          value={form.message}
          onChange={e => set("message", e.target.value)}
          className={`${field} resize-none${errors.message ? " border-red-500" : ""}`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {apiError && (
        <div role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {apiError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-brand hover:bg-[#e05400] disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_-8px_#FF5F00] w-full sm:w-auto justify-center"
      >
        {loading ? "Wird gesendet…" : <>Nachricht senden <span aria-hidden>→</span></>}
      </button>
    </form>
  );
}
