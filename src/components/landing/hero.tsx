"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12 lg:py-20"
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative isolate flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-lg dark:border-slate-700"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/15 to-transparent" />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-200">
              {t.hero.focusTitle}
            </p>
            <ul className="space-y-3 text-base">
              {t.hero.focusItems.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
