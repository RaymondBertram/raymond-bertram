"use client";

import { motion } from "framer-motion";
import { processSteps } from "./content";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur lg:px-12"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Ablauf
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Zusammenarbeit in klaren Schritten.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
          Transparent, iterativ, mit Zeit für Feedback. Auf Desktop als
          Zeitleiste, auf Mobile als klare Steps.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-base font-semibold text-slate-900">
                {step.title}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
            {index < processSteps.length - 1 && (
              <div className="absolute right-[-12px] top-1/2 hidden h-[1px] w-6 bg-slate-200 lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
