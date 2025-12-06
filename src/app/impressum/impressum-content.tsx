"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ImpressumContent() {
  const { language } = useLanguage();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="prose max-w-none prose-slate dark:prose-invert">
        {language === "de" ? <GermanImprint /> : <EnglishImprint />}
      </div>
    </div>
  );
}

function GermanImprint() {
  return (
    <>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>Raymond Bertram</p>
      <p>Full Stack Software Engineer in einer beratenden Funktion</p>
      <p>21244 Buchholz</p>

      <h2>Kontakt</h2>
      <p>E-Mail: contact@bertram-tech.de</p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
      <p>DE367319126</p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <h3>Berufsbezeichnung:</h3>
      <p>Full Stack Software Engineer in einer beratenden Funktion</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. Unsere
        E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>Quelle: eRecht24</p>
    </>
  );
}

function EnglishImprint() {
  return (
    <>
      <h1>Imprint</h1>

      <h2>Information pursuant to § 5 TMG</h2>
      <p>Raymond Bertram</p>
      <p>Full Stack Software Engineer in a consulting role</p>
      <p>21244 Buchholz</p>

      <h2>Contact</h2>
      <p>E-mail: contact@bertram-tech.de</p>

      <h2>VAT ID</h2>
      <p>VAT identification number in accordance with § 27 a of the German Value Added Tax Act:</p>
      <p>DE367319126</p>

      <h2>Professional title and professional regulations</h2>
      <h3>Professional title:</h3>
      <p>Full Stack Software Engineer in a consulting role</p>

      <h2>EU dispute resolution</h2>
      <p>
        The European Commission provides a platform for online dispute resolution (ODR):{" "}
        <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. You can
        find our e-mail address above in this imprint.
      </p>

      <h2>Consumer dispute resolution / universal arbitration board</h2>
      <p>
        We are neither willing nor obliged to participate in dispute resolution proceedings before a
        consumer arbitration board.
      </p>

      <p>Source: eRecht24</p>
    </>
  );
}
