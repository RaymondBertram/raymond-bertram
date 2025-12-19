"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const GITHUB_URL = "https://github.com/RaymondBertram";
  const LINKEDIN_URL = "https://www.linkedin.com/in/raymond-bertram";

  return (
    <section
      id="contact"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.contact.description}
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              {t.contact.email}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              {t.contact.linkedin}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
            {t.contact.requestTitle}
          </p>
          <div className="mt-5 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {t.contact.description}
            </p>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                {t.contact.emailLabel}
              </span>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:hover:border-slate-600"
              >
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
