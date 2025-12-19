"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const GITHUB_URL = "https://github.com/RaymondBertram";
  const LINKEDIN_URL = "https://www.linkedin.com/in/raymond-bertram";

  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="ge-container flex flex-col gap-6 py-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {t.footer.brand}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
            <Link
              href="/impressum"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {t.footer.imprint}
            </Link>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <Link
              href="/datenschutz"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a
              href={`mailto:${t.footer.email}`}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {t.footer.email}
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {t.footer.linkedin}
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {t.footer.github}
            </a>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t.footer.copyright} {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
