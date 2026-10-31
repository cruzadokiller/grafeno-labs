const groups = [
  {
    label: "Marketing & analítica",
    chips: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Looker Studio",
      "Google Ads",
      "Meta Ads",
      "Search Console",
      "Marcaje & GTM server-side",
      "CRM & automatización",
      "SEO · GEO · AEO",
    ],
  },
  {
    label: "Producto & desarrollo",
    chips: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WooCommerce",
      "PostgreSQL",
      "PWA",
      "Google Gemini",
      "RAG & agentes",
      "n8n · automatización",
      "Spec-driven dev",
      "Vercel",
    ],
  },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" style={{ borderTop: "1px solid var(--line)", padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-10" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Tecnologías</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Las herramientas con las que <span className="chrome-text">medimos y crecemos</span>.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            Las mismas que usan los equipos de marketing y producto de alto nivel. Elegimos la
            correcta para cada proyecto.
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: 30 }}>
          {groups.map((g, i) => (
            <div key={g.label} className={`reveal ${i === 0 ? "d1" : "d2"}`}>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                {g.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {g.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
