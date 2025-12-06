"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
              href="https://www.linkedin.com"
              className="inline-flex w-max items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              {t.contact.linkedin}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
            {t.contact.requestTitle}
          </p>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800 dark:text-slate-100">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-white dark:focus:ring-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800 dark:text-slate-100">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-white dark:focus:ring-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800 dark:text-slate-100">
                {t.contact.messageLabel}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-white dark:focus:ring-slate-700"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {t.contact.submit}
            </button>
            {submitted && (
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {t.contact.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
