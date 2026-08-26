import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Arturo Meza Sánchez — Ingeniero en Computación",
  author: "Arturo Meza Sánchez",
  description:
    "Ingeniero en Computación egresado de la UNAM. Especialista en desarrollo web (Next.js), administración de servidores Linux y sistemas embebidos. CDMX, México.",
  lang: "es",
  siteLogo: "/perfil.jpg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Trayectoria", href: "#highlights" },
    { text: "Skills", href: "#skills" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/EnfrijoladaDeFrijol" },
    { text: "LinkedIn", href: "https://linkedin.com/in/arturo-meza-5176252a9" },
    { text: "Email", href: "mailto:arturomezsanchez@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Arturo Meza",
    specialty: "Ingeniero en Computación",
    summary:
      "Egresado de la UNAM (100% créditos). Especialista en desarrollo web con Next.js, administración de servidores Linux y diseño de sistemas embebidos. Apasionado por resolver problemas y competir en hackatones.",
    email: "arturomezsanchez@gmail.com",
    location: "CDMX, México",
  },
  experience: [
    {
      company: "PROTECO / PROTECSA (UNAM)",
      position: "Coordinador de Proyectos",
      startDate: "Feb 2024",
      endDate: "Dic 2024",
      summary: [
        "Desarrollo full-stack del sitio web institucional usando Next.js con despliegue en nube (Cloudflare + Vercel).",
        "Profesor de Linux y programación en el Curso Latinoamericano SIAFI, impartiendo conocimientos a estudiantes de toda la región.",
        "Formando en programación en diversas tecnologías para distintos niveles de experiencia, desde la preparatoria hasta el nivel universitario.",
        "Proyecto de mejora en ciberseguridad del Servidor de PROTECO, en Redhat",
      ],
    },
    {
      company: "Smeisa",
      position: "Administrador de Servidor Ubuntu",
      startDate: "Ene 2024",
      endDate: "Dic 2024",
      summary: [
        "Mantenimiento y administración de servidor Ubuntu para operaciones empresariales.",
        "Implementación de Plane (Project Manager) con Docker Compose para gestión de proyectos del equipo.",
      ],
    },
    {
      company: "Serviap",
      position: "Desarrollador Web Jr.",
      startDate: "Nov 2023",
      endDate: "May 2024",
      summary: [
        "Desarrollo de aplicaciones web e integración de bases de datos para plataformas internas.",
        "Creación de herramientas internas con Airtable para automatización de procesos empresariales.",
      ],
    },
  ],
  projects: [
    {
      name: "Sitio Institucional PROTECSA",
      summary:
        "Arquitectura Frontend en Next.js con despliegue en Vercel. Sitio web institucional para el programa de tecnología y ciencia de la UNAM.",
      linkPreview: "https://protecsa-website-git-main-arthurs-projects-32b28715.vercel.app/",
      linkSource: "https://github.com/EnfrijoladaDeFrijol/protecsa-website/tree/main",
      image: "/protecsa.jpg",
      tags: ["Next.js", "TypeScript", "React", "Vercel", "Cloudflare"],
    },
    {
      name: "Estética París Narvarte",
      summary:
        "Landing page profesional para negocio local. Diseño responsive con enfoque en conversión y experiencia de usuario.",
      linkPreview: "https://estetica-paris-xi.vercel.app/",
      linkSource: "https://github.com/EnfrijoladaDeFrijol/estetica-paris/tree/master",
      image: "/estetica-paris.jpg",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Astro",
        "Tailwind CSS",
        "Vercel",
        "Google Maps API",
        "WhatsApp API"
      ],
    },
    {
      name: "Plataforma FacMed MOLIMOD",
      summary: "Plataforma web para la FacMed (UNAM). Migración de Google Forms a sistema web con base de datos relacional para Recursos Humanos.",
      linkPreview: "https://drive.google.com/file/d/1IgMXua0GIN613obWJfUYEEZS9rVf7Ka2/view?usp=sharing",
      linkSource: "https://github.com/EnfrijoladaDeFrijol/Plataforma_facmed_MOLIMOD.git",
      image: "/facmed_plataforma.png",
      tags: ["Python", "Django", "PostgreSQL", "Docker"],
    },
    {
      name: "Hackathon 2026 Swift Change Makers",
      summary:
        "4to lugar — Desarrollo de aplicación iOS «AIda» en hackathon internacional.",
      linkPreview: "https://drive.google.com/file/d/1mzVYx37CYNEsJjXidVk9m3-cpi87lWFn/view?usp=sharing",
      linkSource: "https://github.com/EnfrijoladaDeFrijol/Aida_app.git",
      image: "/equipo26.jpeg",
      tags: ["Swift", "iOS", "SwiftUI"],
    },
    {
      name: "AR-Beat",
      summary: "Aplicación de Realidad Aumentada que convierte un escritorio en un estudio musical. Utiliza la cámara y tarjetas para proyectar instrumentos en 3D, permitiendo mezclar sonidos en tiempo real.",
      linkPreview: "https://drive.google.com/file/d/1baO9M7C3RVnp6SigElnULtvXYQhMD-fD/view?usp=sharing",
      linkSource: "https://github.com/EnfrijoladaDeFrijol/Proyecto_AR.git",
      image: "/AR-Beat.jpg",
      tags: ["Unity 6", "C#", "3ds Max", "Realidad Aumentada", "Android"],
    }
  ],
  about: {
    description: `Soy Arturo Meza Sánchez, Ingeniero en Computación egresado de la UNAM con el 100% de créditos completados. Me especializo en el desarrollo web con Next.js, la administración de servidores Linux (Arch, Debian, Ubuntu) y la docencia tecnológica.

Me apasiona resolver problemas complejos integrando software y hardware — desde sistemas embebidos con Arduino y Raspberry Pi hasta diseños en FPGA con VHDL. Soy competidor activo en hackatones de alto rendimiento como IEEExtreme y Swift Change Makers, donde he fortalecido mi capacidad de trabajar bajo presión y entregar soluciones creativas en tiempo récord.`,
    image: "/perfil.jpg",
  },
  skills: [
    {
      category: "Frontend & UI",
      items: ["TypeScript", "JavaScript", "Next.js", "React", "HTML/CSS", "Astro"],
    },
    {
      category: "Backend & Arquitectura",
      items: ["C#", "Python", "Java", "NestJS", "Django", "Python"],
    },
    {
      category: "Bases de Datos",
      items: ["PostgreSQL", "MySQL", "Modelado E-R"],
    },
    {
      category: "DevOps & OS",
      items: ["Linux (Arch / Debian / Ubuntu Server)", "Bash", "Docker", "Git / GitHub"],
    },
    {
      category: "Hardware & Sistemas Embebidos",
      items: ["Arduino Uno", "Raspberry Pi Pico", "FPGA (VHDL)"],
    },
    {
      category: "Métodlogias Ágiles",
      items: ["SCRUM"],
    },
  ],
  highlights: [
    {
      icon: "🎓",
      title: "Docencia",
      items: [
        { text: "Curso de Linux — Curso Latinoamericano (SIAFI)" },
        { text: "Curso de Programación en Linux, Python, IA — PROTECO, UNAM" },
        { text: "Curso de Administración de Servidores — PROTECO, UNAM" },
        { text: "Plática IEEE Day, IEEE 802.11 y el Wifi — IEEE, UNAM", link: "certificados/IEEE-Day.pdf" }
      ],
    },
    {
      icon: "🏆",
      title: "Hackatones",
      items: [
        { text: "IEEExtreme 17.0 (2023) — Competencia internacional de programación, 24 horas", },
        { text: "IEEExtreme 18.0 (2024) — Competencia internacional de programación, 24 horas", },
        { text: "IEEExtreme 19.0 (2025) — Competencia internacional de programación, 24 horas", link: "/certificados/Certificate_IEEEXtreme19_Luis_Arturo_Meza_Sánchez.pdf" },
        { text: "Swift Change Makers 2025 — 5to lugar, desarrollo de app iOS «Lumi»", link: "/certificados/CartaJustiHack2025_Meza.pdf" },
        { text: "Swift Change Makers 2026 — 4to lugar, desarrollo de app iOS «AIda»", link: "/certificados/CartaJustiHack2026_Meza.pdf" },
      ],
    },
    {
      icon: "📖",
      title: "Programas & Asociaciones",
      items: [
        { text: "PROTECO (Programa de Tecnología en Cómputo) — Becario, Coordinador de Proyectos UNAM (2023–2024)" },
        { text: "PROTECSA — Becario Fundador, UNAM (2025)" },
        { text: "SIAFI — Sociedad de Inteligencia Artificial de la Facultad de Ingeniería" },
        { text: "IEEE — Computer Society - Rama estudiantil UNAM" },
      ],
    },
    {
      icon: "📋",
      title: "Certificaciones y Diplomados",
      items: [
        { text: "Scrum Fundamentals Certified (SFC) — SCRUMstudy", link: "/certificados/SCRUM.pdf" },
        { text: "Marketing Strategy Fundamentals (SCMS-F) — SMstudy", link: "/certificados/Marketing.pdf" },
        { text: "Diplomado en Liderazgo — (En curso)" },
      ],
    }
  ],
};
