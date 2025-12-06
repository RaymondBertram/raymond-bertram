import { AboutSection } from "@/components/landing/about";
import { ContactSection } from "@/components/landing/contact";
import { HeroSection } from "@/components/landing/hero";
import { ProcessSection } from "@/components/landing/process";
import { ProjectsSection } from "@/components/landing/projects";
import { ServicesSection } from "@/components/landing/services";
import { TechStackSection } from "@/components/landing/tech-stack";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-20 pt-28">
      <main className="ge-container space-y-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
