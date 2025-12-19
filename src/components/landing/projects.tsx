"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:px-12"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.projects.heading}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.projects.subheading}
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
        >
          {t.projects.cta}
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="space-y-3">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {project.role}
                </p>
              </div>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-slate-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-max items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              {t.projects.detailsLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12l-3.75 3.75m-14.25-3.75H21"
                />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
