export type Language = "de" | "en";

export type TranslationContent = {
  nav: {
    brand: string;
    about: string;
    services: string;
    projects: string;
    process: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    focusTitle: string;
    focusItems: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
    profileTitle: string;
    timeline: { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    services: { title: string; bullets: string[] }[];
  };
  tech: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  projects: {
    heading: string;
    subheading: string;
    cta: string;
    detailsLabel: string;
    items: {
      id: string;
      title: string;
      role: string;
      shortDescription: string;
      tags: string[];
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    linkedin: string;
    emailLabel: string;
    requestTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  footer: {
    brand: string;
    tagline: string;
    imprint: string;
    privacy: string;
    email: string;
    linkedin: string;
    github: string;
    copyright: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  de: {
    nav: {
      brand: "RB.dev",
      about: "Über mich",
      services: "Leistungen",
      projects: "Projekte",
      process: "Ablauf",
      contact: "Kontakt",
      cta: "Projekt anfragen",
    },
    hero: {
      eyebrow: "Softwareentwicklung nebenberuflich",
      title: "Digitale Lösungen, die wirklich genutzt werden.",
      description:
        "Web- & Appentwicklung für dein Projekt – pragmatisch, strukturiert und mit Fokus auf klare Ergebnisse. Nebenberuflich verfügbar für ausgewählte Vorhaben.",
      primaryCta: "Projekt anfragen",
      secondaryCta: "Projekte ansehen",
      focusTitle: "Fokus",
      focusItems: [
        "Web-Apps, Mobile-Apps, digitale Tools",
        "Klarer Prozess, enge Feedback-Schleifen",
        "Nebenberuflich, fokussiert, zuverlässig",
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Softwareentwickler mit klarem Fokus.",
      description:
        "Ich entwickle Web- und Mobile-Anwendungen, die verständlich sind und genutzt werden. Nebenberuflich heißt: schlanke Kommunikation, strukturierte Sprints, ehrliche Einschätzungen.",
      badges: [
        "Full-Stack Web",
        "Appentwicklung",
        "UX-orientierte Lösungen",
        "Nebenberuflich & flexibel",
      ],
      profileTitle: "Kurzprofil",
      timeline: [
        {
          title: "Studium & Grundlagen",
          description:
            "Solide Basis in Softwareentwicklung, Web-Technologien und Architektur.",
        },
        {
          title: "Berufliche Projekte",
          description:
            "Erfahrung mit digitalen Produkten für KMU, Startups und interne Teams.",
        },
        {
          title: "Nebenprojekte",
          description:
            "Fokussierte, pragmatische Lösungen mit klarer Kommunikation und kurzen Iterationen.",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Web, Apps und Tools für klare Ergebnisse.",
      description:
        "Modular gedacht, damit du später erweitern kannst. Fokus auf Verständlichkeit und pragmatische Umsetzung.",
      services: [
        {
          title: "Webanwendungen & Websites",
          bullets: [
            "Klar strukturierte Single-Page- oder Multi-Page-Erlebnisse",
            "SEO-freundliche Umsetzung mit Next.js",
            "Saubere Komponenten-Bibliothek für spätere Erweiterungen",
          ],
        },
        {
          title: "Mobile Apps / Cross-Platform",
          bullets: [
            "Prototypen bis MVP für iOS & Android",
            "API-Integration, Authentifizierung, Push & Offline-Flows",
            "Schnelle Releases für Feedback-Schleifen",
          ],
        },
        {
          title: "Individuelle Tools & Dashboards",
          bullets: [
            "Interne Tools zur Automatisierung von Abläufen",
            "Datenvisualisierung, Tabellen, Exporte",
            "Rollen- & Rechtekonzepte nach Bedarf",
          ],
        },
        {
          title: "Beratung & technische Konzeption",
          bullets: [
            "Technische Roadmaps und Machbarkeitsanalyse",
            "UX-orientierte Journeys, die verstanden werden",
            "Priorisierung nach Nutzen und Aufwand",
          ],
        },
      ],
    },
    tech: {
      eyebrow: "Tech-Stack",
      title: "Bewährte Tools für schnelle Ergebnisse.",
      description:
        "Moderne Technologien, die wartbar bleiben und sich gut erweitern lassen.",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ],
        },
        {
          title: "Backend",
          items: [
            "Node.js",
            "REST APIs",
            "Next API Routes",
            "Prisma (optional)",
            "Auth",
          ],
        },
        {
          title: "Deployment",
          items: [
            "Vercel",
            "Docker",
            "CI/CD-Pipelines",
            "Monitoring & Logging",
          ],
        },
      ],
    },
    projects: {
      heading: "Projekte",
      subheading:
        "Eine Auswahl von Projekten, bei denen ich digitale Produkte, Apps und Websites konzipiert, entwickelt oder weiterentwickelt habe.",
      cta: "Lass uns sprechen",
      detailsLabel: "Mehr erfahren",
      items: [
        {
          id: "motoInside",
          title: "Moto Inside – Werbeseite",
          role: "Webentwicklung & Datenvisualisierung",
          shortDescription:
            "Responsives Werbe- und Landingpage-Konzept für ein niederländisches Motocross-Unternehmen. Umsetzung in Webflow inklusive eingebettetem Balkendiagramm, Kontaktformular für Angebotsanfragen und klarer Story rund um Nachwuchs- und Standortförderung im Motorsport.",
          tags: [
            "HTML/CSS",
            "Webflow Development",
            "JavaScript",
            "Figma Design",
          ],
        },
        {
          id: "lifebonusPro",
          title: "LifeBonus Pro – Mobile App",
          role: "Full-Stack Entwicklung",
          shortDescription:
            "Mobile App, die Pflegekräfte bei Bewegung, Achtsamkeit und präventiver Gesundheitsförderung unterstützt. Mitarbeit als Full-Stack Entwickler: neue Features mit React Native, TypeScript und AWS umgesetzt und bestehende Funktionen in einem agilen Team weiterentwickelt.",
          tags: [
            "React Native",
            "TypeScript",
            "React",
            "AWS",
            "Python",
            "Agile Entwicklung",
          ],
        },
        {
          id: "helloTraffic",
          title: "Hello Traffic – Standortanalyse",
          role: "Produktentwicklung & Frontend",
          shortDescription:
            "Plattform für hochpräzise Frequenzanalysen von Standorten – für Expansionsmanager, Projektentwickler, Makler, Eigentümer und Centermanager. Auf Basis von täglich über 50 Mio. anonymisierten GPS-Datenpunkten werden Standortentscheidungen datenbasiert statt aus dem Bauch heraus getroffen.",
          tags: ["React", "Node.js", "Express.js", "Data Analytics"],
        },
      ],
    },
    process: {
      eyebrow: "Ablauf",
      title: "Zusammenarbeit in klaren Schritten.",
      description:
        "Transparent, iterativ, mit Zeit für Feedback. Auf Desktop als Zeitleiste, auf Mobile als klare Steps.",
      steps: [
        {
          title: "Erstgespräch & Anforderungen",
          description:
            "Wir klären Ziele, Prioritäten und Rahmen. Kurz, fokussiert, ohne Buzzwords.",
        },
        {
          title: "Konzept & Angebot",
          description:
            "Ein klarer Fahrplan mit Aufwandsschätzung, Milestones und realistischen Terminen.",
        },
        {
          title: "Entwicklung & Feedback",
          description:
            "Kurze Sprints, klickbare Zwischenstände, schnelle Rückmeldung möglich.",
        },
        {
          title: "Launch & Support",
          description:
            "Deployment, Monitoring und optional Begleitung nach dem Go-Live.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns über dein Projekt sprechen.",
      description:
        "Nebenberuflich verfügbar für ausgewählte Projekte. Sag kurz, worum es geht – ich melde mich zeitnah mit einer ehrlichen Einschätzung.",
      email: "hallo@example.com",
      linkedin: "LinkedIn",
      emailLabel: "E-Mail",
      requestTitle: "Projekt anfragen",
      nameLabel: "Name",
      namePlaceholder: "Wie darf ich dich nennen?",
      emailPlaceholder: "Deine E-Mail für die Antwort",
      messageLabel: "Projektbeschreibung",
      messagePlaceholder: "Was brauchst du? Zeitrahmen, Ziele, Scope?",
      submit: "Nachricht senden",
      success: "Danke! Deine Anfrage ist eingegangen. Ich melde mich zeitnah.",
    },
    footer: {
      brand: "RB.dev",
      tagline: "Digitale Lösungen mit Fokus auf Klarheit.",
      imprint: "Impressum",
      privacy: "Datenschutz",
      email: "hallo@example.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyright: "© Raymond Bertram",
    },
  },
  en: {
    nav: {
      brand: "RB.dev",
      about: "About",
      services: "Services",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
      cta: "Request a project",
    },
    hero: {
      eyebrow: "Software development on the side",
      title: "Digital solutions people actually use.",
      description:
        "Web and app development for your project—pragmatic, structured, and focused on clear outcomes. Available alongside my main role for selected work.",
      primaryCta: "Request a project",
      secondaryCta: "View projects",
      focusTitle: "Focus",
      focusItems: [
        "Web apps, mobile apps, digital tools",
        "Clear process, tight feedback loops",
        "Part-time, focused, reliable",
      ],
    },
    about: {
      eyebrow: "About",
      title: "Software engineer with a clear focus.",
      description:
        "I build web and mobile apps that are understandable and get used. Side-work means lean communication, structured sprints, and honest assessments.",
      badges: [
        "Full-stack web",
        "App development",
        "UX-focused solutions",
        "Part-time & flexible",
      ],
      profileTitle: "Short profile",
      timeline: [
        {
          title: "Studies & fundamentals",
          description:
            "Solid foundation in software development, web tech, and architecture.",
        },
        {
          title: "Professional projects",
          description:
            "Experience with digital products for SMBs, startups, and internal teams.",
        },
        {
          title: "Side projects",
          description:
            "Focused, pragmatic solutions with clear communication and short iterations.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Web, apps, and tools for clear results.",
      description:
        "Built to stay modular so you can extend later. Focus on clarity and pragmatic delivery.",
      services: [
        {
          title: "Web apps & websites",
          bullets: [
            "Well-structured single- or multi-page experiences",
            "SEO-friendly builds with Next.js",
            "Clean component library for future growth",
          ],
        },
        {
          title: "Mobile apps / cross-platform",
          bullets: [
            "Prototypes to MVPs for iOS & Android",
            "API integration, auth, push, and offline flows",
            "Fast releases for quick feedback",
          ],
        },
        {
          title: "Custom tools & dashboards",
          bullets: [
            "Internal tools to automate workflows",
            "Data visualization, tables, exports",
            "Roles and permissions when needed",
          ],
        },
        {
          title: "Consulting & technical planning",
          bullets: [
            "Technical roadmaps and feasibility checks",
            "UX-oriented journeys people understand",
            "Prioritization by value and effort",
          ],
        },
      ],
    },
    tech: {
      eyebrow: "Tech stack",
      title: "Proven tools for quick results.",
      description:
        "Modern technologies that stay maintainable and easy to extend.",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ],
        },
        {
          title: "Backend",
          items: [
            "Node.js",
            "REST APIs",
            "Next API Routes",
            "Prisma (optional)",
            "Auth",
          ],
        },
        {
          title: "Deployment",
          items: [
            "Vercel",
            "Docker",
            "CI/CD pipelines",
            "Monitoring & logging",
          ],
        },
      ],
    },
    projects: {
      heading: "Projects",
      subheading:
        "A selection of projects where I designed, built or improved digital products, apps and websites.",
      cta: "Let’s talk",
      detailsLabel: "Learn more",
      items: [
        {
          id: "motoInside",
          title: "Moto Inside Advertisement",
          role: "Web development & data visualization",
          shortDescription:
            "Responsive advertising landing page for a motocross company in the Netherlands. Built in Webflow with embedded bar-chart visualizations, a contact form for quote requests and a clear story around supporting motorsport venues, fans and young technical talent.",
          tags: [
            "HTML/CSS",
            "Webflow Development",
            "JavaScript",
            "Figma Design",
          ],
        },
        {
          id: "lifebonusPro",
          title: "LifeBonus Pro – Mobile App",
          role: "Full-stack development",
          shortDescription:
            "Mobile app that helps caregivers improve daily movement, mindfulness and preventive health. Worked as a full-stack developer in an agile team, implementing and improving features using React Native, TypeScript, AWS and Python.",
          tags: [
            "React Native",
            "TypeScript",
            "React",
            "AWS",
            "Python",
            "Agile Development",
          ],
        },
        {
          id: "helloTraffic",
          title: "Hello Traffic – Location Analytics",
          role: "Product development & frontend",
          shortDescription:
            "Platform for high-precision footfall and location analytics – built for expansion managers, developers, brokers, owners and center managers. Uses more than 50 million anonymized GPS data points per day to turn location decisions from gut feeling into data-driven strategy.",
          tags: ["React", "Node.js", "Express.js", "Data Analytics"],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Collaboration in clear steps.",
      description:
        "Transparent, iterative, with time for feedback. Timeline on desktop, concise steps on mobile.",
      steps: [
        {
          title: "Intro call & requirements",
          description:
            "We clarify goals, priorities, and constraints. Short, focused, no buzzwords.",
        },
        {
          title: "Concept & proposal",
          description:
            "A clear roadmap with estimates, milestones, and realistic timelines.",
        },
        {
          title: "Build & feedback",
          description: "Short sprints, clickable checkpoints, fast responses.",
        },
        {
          title: "Launch & support",
          description:
            "Deployment, monitoring, and optional support after go-live.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about your project.",
      description:
        "Available part-time for selected work. Share a quick summary—I’ll reply with an honest assessment soon.",
      email: "hallo@example.com",
      linkedin: "LinkedIn",
      emailLabel: "Email",
      requestTitle: "Request a project",
      nameLabel: "Name",
      namePlaceholder: "What should I call you?",
      emailPlaceholder: "Your email for the reply",
      messageLabel: "Project description",
      messagePlaceholder: "What do you need? Timeline, goals, scope?",
      submit: "Send message",
      success: "Thanks! Your request arrived. I’ll get back to you soon.",
    },
    footer: {
      brand: "RB.dev",
      tagline: "Digital solutions with a focus on clarity.",
      imprint: "Imprint",
      privacy: "Privacy",
      email: "hallo@example.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyright: "© Raymond Bertram",
    },
  },
};
