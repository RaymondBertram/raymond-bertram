export const metadata = {
  title: "Impressum | Raymond Bertram",
};

export default function ImpressumPage() {
  return (
    <main className="ge-container py-28">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Impressum
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Platzhaltertext. Bitte rechtliche Angaben ergänzen.
        </p>
        <div className="mt-8 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Verantwortlich
            </h2>
            <p className="mt-2 leading-relaxed">
              Raymond Bertram
              <br />
              Musterstraße 1
              <br />
              12345 Musterstadt
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Kontakt
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>E-Mail: hallo@example.com</li>
              <li>Telefon: +49 000 000000</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Haftungsausschluss
            </h2>
            <p className="mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas massa non neque fermentum, vitae cursus metus consequat.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
