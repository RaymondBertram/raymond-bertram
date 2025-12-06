import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="ge-container flex flex-col gap-6 py-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">RB.dev</p>
            <p className="text-sm text-slate-600">
              Digitale Lösungen mit Fokus auf Klarheit.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-700">
            <Link href="/impressum" className="hover:text-slate-900">
              Impressum
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/datenschutz" className="hover:text-slate-900">
              Datenschutz
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <a href="mailto:hallo@example.com" className="hover:text-slate-900">
              hallo@example.com
            </a>
            <span className="text-slate-300">•</span>
            <a href="https://www.linkedin.com" className="hover:text-slate-900">
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a href="https://github.com" className="hover:text-slate-900">
              GitHub
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Raymond Bertram
          </p>
        </div>
      </div>
    </footer>
  );
}
