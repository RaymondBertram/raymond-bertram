"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {t.about.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.about.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.about.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/60"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
            {t.about.profileTitle}
          </h3>
          <div className="space-y-4">
            {t.about.timeline.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm dark:bg-slate-900/70 dark:text-slate-200"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                  {index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
