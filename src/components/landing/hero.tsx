"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-sm backdrop-blur lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-40 w-40 rounded-full bg-slate-100 blur-3xl" />
      </div>
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Softwareentwicklung nebenberuflich
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Digitale Lösungen, die wirklich genutzt werden.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Web- & Appentwicklung für dein Projekt – pragmatisch, strukturiert
            und mit Fokus auf klare Ergebnisse. Nebenberuflich verfügbar für
            ausgewählte Vorhaben.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-800"
            >
              Projekt anfragen
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Projekte ansehen
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative isolate flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-lg"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/15 to-transparent" />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-200">
              Fokus
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  1
                </span>
                Web-Apps, Mobile-Apps, digitale Tools
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  2
                </span>
                Klarer Prozess, enge Feedback-Schleifen
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  3
                </span>
                Nebenberuflich, fokussiert, zuverlässig
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
