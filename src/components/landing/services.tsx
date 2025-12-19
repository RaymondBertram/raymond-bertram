"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12"
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {t.services.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.services.description}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {t.services.services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="text-slate-400 dark:text-slate-500">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
