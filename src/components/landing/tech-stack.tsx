"use client";

import { motion } from "framer-motion";
import { techStack } from "./content";

export function TechStackSection() {
  return (
    <section
      id="tech"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur lg:px-12"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Tech-Stack
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Bewährte Tools für schnelle Ergebnisse.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
          Moderne Technologien, die wartbar bleiben und sich gut erweitern
          lassen.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {techStack.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-800"
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
