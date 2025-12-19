"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  Language,
  TranslationContent,
  translations,
} from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "de" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
