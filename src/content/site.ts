/**
 * CV vivo — Felix Alberto Arocha Duran
 * Edita placeholders restantes: linkedin, docuguardLiveUrl, videoUrl, avatar.
 */
export const site = {
  name: "Felix Alberto Arocha Duran",
  shortName: "Felix A. Arocha",
  githubUser: "farocha23-ujap",
  githubPersonal: "https://github.com/felixaroc-a",
  role: "Software Engineer · Backend & AI",
  subtitle: "Estudiante de Ingeniería en Computación · 8vo semestre · UJAP",
  location: "Valencia, Venezuela",
  phone: "+58 414-4001856",
  email: "felixarocha1@gmail.com",
  linkedin: "LINKEDIN_PLACEHOLDER",
  github: "https://github.com/farocha23-ujap",
  hub: "https://github.com/farocha23-ujap/portfolio-hub",
  /** Cuando tengas Render/Railway, pon aquí la URL completa https://... */
  docuguardLiveUrl: "",
  videoUrl: "",
  avatarPath: "/avatar.jpg",
  tagline:
    "Construyo APIs, agentes y sistemas con evidencia: arquitectura limpia, seguridad y demos clonables.",
  about: [
    "Estudiante de Ingeniería en Computación (8vo semestre, Universidad José Antonio Páez) con mentalidad de crecimiento rápido y dominio de fundamentos: POO, algoritmos, estructuras de datos, bases de datos, seguridad y arquitectura de software.",
    "Experiencia práctica en desarrollo modular, arquitectura hexagonal, automatización, gestión de datos e integración de IA. Construyo soluciones full-stack robustas sin limitarme a un solo dominio.",
    "Este sitio es mi CV vivo: perfil + evidencia ejecutable (DocuGuard y repos públicos de backend, RAG y seguridad).",
  ],
  experience: [
    {
      title: "Desarrollador de software (producto)",
      org: "DOT · Nordik-IA — App de escritorio Windows",
      dates: "2025 – 2026",
      bullets: [
        "Desarrollo full-stack de aplicación desktop (Electron + React) y API (FastAPI): autenticación JWT, suscripciones, perfiles, cifrado de tokens y límites de uso.",
        "Arquitectura hexagonal + DDD en backend; PostgreSQL + Firestore; OAuth Google (Gmail/Calendar); integración WhatsApp y control de acceso por USB.",
        "Agentes de IA con tool-calling (archivos, web, automatizaciones), además de módulos de seguridad, datos y UX guiada para usuario no técnico.",
      ],
    },
  ],
  education: [
    {
      title: "Ingeniería en Computación",
      org: "Universidad José Antonio Páez (UJAP)",
      detail: "8vo semestre · En curso",
    },
  ],
  softSkills: [
    "Liderazgo",
    "Comunicación asertiva",
    "Resolución de problemas",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Aprendizaje autónomo",
  ],
  languages: ["Español — nativo", "Inglés — lectura técnica"],
  featured: {
    title: "DocuGuard",
    subtitle: "RAG sobre políticas internas con citas obligatorias",
    repo: "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia/tree/main/maxima",
    architecture:
      "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia/blob/main/maxima/ARCHITECTURE.md",
    bullets: [
      "Retrieval + generación con chunk_id y scores",
      "UI de producto, métrica recall@3 y stub sin API key",
      "Límites documentados (BoW ≠ embeddings densos)",
    ],
  },
  projects: [
    {
      title: "CSV Ingest API",
      phase: "Fase 1 · Cimientos",
      blurb: "FastAPI + Postgres + Docker: limpia y expone CSV con tipado y tests.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-01-cimientos",
    },
    {
      title: "DocuGuard (RAG)",
      phase: "Fase 2 · Cerebro IA · estrella",
      blurb: "Asistente con citas, UI premium y evaluación recall@3.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia",
    },
    {
      title: "Auth JWT + Go",
      phase: "Fase 3 · Seguridad",
      blurb: "Login endurecido, rate limit, audit log y validador JWT en Go.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-03-ciberseguridad",
    },
    {
      title: "Prompt firewall",
      phase: "Fase 4 · Singularidad",
      blurb: "Licencia HMAC + firewall de jailbreaks + CI DevSecOps.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-04-singularidad",
    },
  ],
  techBlocks: [
    {
      title: "Arquitectura",
      body: "Hexagonal (Ports & Adapters), modularidad, POO, Clean Code, patrones.",
    },
    {
      title: "Backend & web",
      body: "Python, FastAPI, TypeScript/JavaScript, React, Electron, Node.js.",
    },
    {
      title: "Datos",
      body: "PostgreSQL, Firebase/Firestore, modelado SQL/NoSQL, algoritmos.",
    },
    {
      title: "Seguridad",
      body: "JWT, cifrado de secretos, buenas prácticas de API, auth endurecida.",
    },
    {
      title: "IA",
      body: "LLMs, agentes con tool-calling, RAG con citas, automatización.",
    },
    {
      title: "Ops",
      body: "Docker, Git, GitHub Actions, GCP, demos reproducibles.",
    },
  ],
  stack: [
    "Python",
    "FastAPI",
    "TypeScript",
    "React",
    "Electron",
    "PostgreSQL",
    "Docker",
    "RAG",
    "Go",
    "Firebase",
    "pytest",
    "GitHub Actions",
  ],
} as const;
