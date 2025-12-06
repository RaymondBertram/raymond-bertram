import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./fonts";
import Navigation from "@/components/navigation/navigation.component";
import Footer from "@/components/footer/footer.component";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Bertram – Softwareentwickler für Web & Apps",
  description:
    "Minimalistisches Portfolio von Raymond Bertram: Web- & App-Entwicklung, digitale Lösungen für kleine Unternehmen, Selbstständige und Nebenprojekte.",
  applicationName: "Raymond Bertram Portfolio",
  authors: [{ name: "Raymond Bertram", url: "https://bertram-tech.de" }],
  keywords: [
    "Softwareentwickler",
    "Next.js",
    "React",
    "TypeScript",
    "Webentwicklung",
    "Appentwicklung",
    "Freelance",
    "Nebenberuflich",
  ],
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
            <Analytics />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
