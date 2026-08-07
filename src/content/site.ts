/**
 * Placeholders — edita SOLO este archivo para tus toques finales.
 * Ver TU_TOQUES_FINALES.md
 */
export const site = {
  name: "Felix",
  githubUser: "farocha23-ujap",
  role: "Junior Backend & AI Engineer",
  tagline:
    "Construyo APIs y sistemas RAG con evidencia: citas, tests y demos que se pueden clonar.",
  email: "EMAIL_PLACEHOLDER",
  linkedin: "LINKEDIN_PLACEHOLDER",
  github: "https://github.com/farocha23-ujap",
  hub: "https://github.com/farocha23-ujap/portfolio-hub",
  /** Pega aquí la URL pública de DocuGuard tras Render/Railway */
  docuguardLiveUrl: "DOCUGUARD_LIVE_URL",
  videoUrl: "VIDEO_PLACEHOLDER",
  avatarPath: "/avatar.jpg",
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
  stack: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "RAG",
    "Go",
    "pytest",
    "GitHub Actions",
  ],
} as const;
