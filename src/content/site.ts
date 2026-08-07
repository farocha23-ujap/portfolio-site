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
  linkedin: "",
  github: "https://github.com/farocha23-ujap",
  hub: "https://github.com/farocha23-ujap/portfolio-hub",
  /** Live demo on Render */
  docuguardLiveUrl: "https://docuguard-hbtn.onrender.com",
  videoUrl: "",
  avatarPath: "/avatar.jpg",
  tagline:
    "Backend, APIs e integración de IA. Estudiante UJAP (8vo) con experiencia en producto real (DOT).",
  about: [
    "Soy estudiante de Ingeniería en Computación en la UJAP (8vo semestre). Me interesa el backend, la arquitectura limpia y meter IA donde resuelva un problema concreto, no de adorno.",
    "En DOT / Nordik-IA trabajé full-stack (Electron + React + FastAPI): JWT, suscripciones, Postgres/Firestore, OAuth y agentes con tool-calling.",
    "En GitHub publico demos que se pueden clonar: DocuGuard (RAG con citas), APIs con Docker, auth y un firewall básico de prompts.",
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
    subtitle: "Preguntas sobre políticas internas; la respuesta trae fuentes (chunk_id + score)",
    repo: "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia/tree/main/maxima",
    architecture:
      "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia/blob/main/maxima/ARCHITECTURE.md",
    bullets: [
      "API FastAPI + UI simple",
      "Funciona sin API key (modo stub); con key usa OpenAI",
      "Métrica recall@3 sobre un set fijo de preguntas",
    ],
  },
  projects: [
    {
      title: "CSV Ingest API",
      phase: "Backend · datos",
      blurb: "Sube un CSV, limpia filas y las sirve por HTTP. Docker + Postgres.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-01-cimientos",
    },
    {
      title: "DocuGuard",
      phase: "IA · RAG",
      blurb: "Asistente con citas sobre políticas. Demo en Render.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-02-cerebro-ia",
    },
    {
      title: "Auth JWT",
      phase: "Seguridad",
      blurb: "Register/login, tokens, rate limit. Hay un validador en Go.",
      href: "https://github.com/farocha23-ujap/portfolio-fase-03-ciberseguridad",
    },
    {
      title: "Prompt firewall",
      phase: "IA · defensa",
      blurb: "Bloquea jailbreaks básicos + chequeo de licencia de demo.",
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
