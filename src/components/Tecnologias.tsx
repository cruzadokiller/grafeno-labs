const chips = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "PWA",
  "PostgreSQL",
  "Prisma",
  "NextAuth",
  "WooCommerce",
  "APIs & integraciones",
  "Google Gemini",
  "RAG & agentes",
  "Cifrado AES-256 · BYOK",
  "Vercel",
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" style={{ borderTop: "1px solid var(--line)", padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-6" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Tecnologías</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            El stack que hay <span className="chrome-text">debajo</span>.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            Elegimos la herramienta correcta para cada proyecto. Esta es la base técnica con la
            que construimos.
          </p>
        </div>

        <div className="reveal d1 flex flex-wrap gap-3 mt-2">
          {chips.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
