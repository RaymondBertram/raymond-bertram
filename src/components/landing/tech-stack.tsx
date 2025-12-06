"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section
      id="tech"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {t.tech.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t.tech.title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {t.tech.description}
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {t.tech.groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
