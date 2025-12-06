"use client";

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-sm backdrop-blur lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Kontakt
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lass uns über dein Projekt sprechen.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Nebenberuflich verfügbar für ausgewählte Projekte. Sag kurz, worum
            es geht – ich melde mich zeitnah mit einer ehrlichen Einschätzung.
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-700">
            <a
              href="mailto:hallo@example.com"
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              hallo@example.com
            </a>
            <a
              href="https://www.linkedin.com"
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Projekt anfragen
          </p>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Wie darf ich dich nennen?"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Deine E-Mail für die Antwort"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">
                Projektbeschreibung
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Was brauchst du? Zeitrahmen, Ziele, Scope?"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-slate-800"
            >
              Nachricht senden
            </button>
            {submitted && (
              <p className="text-sm font-semibold text-emerald-600">
                Danke! Deine Anfrage ist eingegangen. Ich melde mich zeitnah.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
