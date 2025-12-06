"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Projekte", href: "#projects" },
  { label: "Ablauf", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-lg">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-slate-900"
            aria-label="Zur Startseite"
          >
            RB.dev
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-slate-800 lg:inline-block"
            >
              Projekt anfragen
            </a>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-800 hover:bg-white lg:hidden"
              aria-expanded={open}
              aria-label="Menü öffnen"
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
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-white"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
