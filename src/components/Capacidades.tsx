"use client";

const cells = [
  { k: "01", v: "Marketing digital", d: "SEO · GEO · AEO · medios pagados · RRSS" },
  { k: "02", v: "Funnels, CRM & conversión", d: "Landing pages, gestión de leads (CRM) y CRO" },
  { k: "03", v: "Medición & marcaje", d: "Arquitectura de medición, GTM, GA4 y Looker" },
  { k: "04", v: "Desarrollo web & apps", d: "Sitios, plataformas, PWA y backend seguro" },
  { k: "05", v: "E-commerce", d: "Tiendas que venden de punta a punta" },
  { k: "06", v: "IA, automatización & spec-driven", d: "Agentes, RAG y procesos asistidos por IA" },
];

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      style={{ borderTop: "1px solid var(--line)", background: "var(--bg-elev)", padding: "104px 0" }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-14" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Capacidades</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Un laboratorio, <span className="chrome-text">todas las capacidades</span>.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            Disciplinas que combinamos según el desafío: nunca una herramienta suelta, siempre
            un sistema coherente.
          </p>
        </div>

        <div
          className="reveal d1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {cells.map((c) => (
            <div
              key={c.k}
              className="transition-colors duration-300"
              style={{ background: "var(--bg-elev)", padding: "30px 26px" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#11151b")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-elev)")}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.16em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {c.k}
              </div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: "1.04rem", color: "var(--ink)" }}>
                {c.v}
              </div>
              <div style={{ marginTop: 8, fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.45 }}>
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
