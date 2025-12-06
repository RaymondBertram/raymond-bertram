"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/80">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
            aria-label={t.nav.brand}
          >
            {t.nav.brand}
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400 lg:flex">
              <button
                type="button"
                onClick={() => setLanguage("de")}
                className={`rounded-full px-2 py-1 ${language === "de" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "hover:bg-slate-100 dark:hover:bg-slate-800/80"}`}
              >
                DE
              </button>
              <span aria-hidden className="text-slate-300 dark:text-slate-600">
                |
              </span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-2 py-1 ${language === "en" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "hover:bg-slate-100 dark:hover:bg-slate-800/80"}`}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="hidden rounded-full border border-slate-200 bg-white/70 p-2 text-slate-800 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 lg:inline-flex"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 lg:inline-block"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-800 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 lg:hidden"
              aria-expanded={open}
              aria-label={language === "de" ? "Menü öffnen" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 lg:hidden">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("de")}
                  className={`rounded-full px-2 py-1 ${language === "de" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "hover:bg-slate-100 dark:hover:bg-slate-800/80"}`}
                >
                  DE
                </button>
                <span aria-hidden className="text-slate-300 dark:text-slate-600">
                  |
                </span>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-2 py-1 ${language === "en" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "hover:bg-slate-100 dark:hover:bg-slate-800/80"}`}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-800 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-800 dark:text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-white dark:bg-white dark:text-slate-900"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
