export const metadata = {
  title: "Datenschutz | Raymond Bertram",
};

export default function DatenschutzPage() {
  return (
    <main className="ge-container py-28">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Datenschutz
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Platzhaltertext. Bitte durch rechtsgültige Datenschutzerklärung
          ersetzen.
        </p>
        <div className="mt-8 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Allgemeines
            </h2>
            <p className="mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas massa non neque fermentum, vitae cursus metus consequat.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Erhebung und Verwendung
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Datenkategorie A – Zweck / Speicherdauer (Platzhalter)</li>
              <li>Datenkategorie B – Zweck / Speicherdauer (Platzhalter)</li>
              <li>Weitergabe erfolgt nicht ohne Einwilligung.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Rechte der Nutzer:innen
            </h2>
            <p className="mt-2 leading-relaxed">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung oder Einschränkung der Verarbeitung deiner Daten.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
