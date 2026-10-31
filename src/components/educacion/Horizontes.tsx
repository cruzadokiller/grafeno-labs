import SectionHead, { elevatedSection } from "./SectionHead";

const horizons = [
  {
    tag: "Horizonte 1 · Quick wins",
    title: "Campaña de admisión puntual",
    text: "Impacto rápido en un proceso de admisión en curso, con lo que ya tienes, midiendo desde el primer peso.",
    items: ["Campaña de medios enfocada", "Landing de postulación optimizada", "Panel de resultados en tiempo real"],
  },
  {
    tag: "Horizonte 2 · Sistema",
    title: "Sistema de admisión completo",
    text: "El funnel de punta a punta como una máquina medible y repetible, temporada tras temporada.",
    items: ["Estrategia anual de admisión", "Automatización e IA en el seguimiento", "Integración marketing ↔ admisión"],
  },
];

export default function Horizontes() {
  return (
    <section id="horizontes" style={elevatedSection}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <SectionHead
          eyebrow="Cómo empezar"
          title={
            <>
              Dos horizontes de <span className="chrome-text">trabajo</span>.
            </>
          }
        >
          Puedes partir resolviendo una campaña puntual o construir el sistema de admisión completo.
          Ambos caminos empiezan con un diagnóstico.
        </SectionHead>

        <div className="reveal d1 grid gap-5 grid-cols-1 md:grid-cols-2">
          {horizons.map((h) => (
            <div
              key={h.tag}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 18,
                padding: "32px 30px",
                background: "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,0))",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                {h.tag}
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "12px 0 10px" }}>{h.title}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: "0.96rem", marginBottom: 16 }}>{h.text}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {h.items.map((item) => (
                  <li key={item} style={{ fontSize: "0.9rem", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        marginTop: 8,
                        background: "var(--accent)",
                        transform: "rotate(45deg)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
