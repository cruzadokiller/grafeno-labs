const steps = [
  { n: "FASE 01", title: "Diagnóstico", text: "Mapeamos tu ecosistema actual, fricciones de conversión y oportunidades técnicas." },
  { n: "FASE 02", title: "Hipótesis", text: "Definimos qué experimento aporta más valor de negocio con el menor riesgo." },
  { n: "FASE 03", title: "Construcción", text: "Arquitectura headless, MVP o agente de IA, según el caso, en ciclos cortos." },
  { n: "FASE 04", title: "Medición", text: "Datos sobre la mesa: iteramos sobre lo que mueve la aguja y escalamos." },
];

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-14" style={{ maxWidth: 680 }}>
          <span className="eyebrow">El laboratorio</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Cómo <span className="chrome-text">experimentamos</span>.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            Un método de laboratorio: hipótesis, prototipo, medición e iteración. Sin humo, con
            evidencia.
          </p>
        </div>

        <div className="reveal d1 grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {steps.map((s) => (
            <div key={s.n} className="relative" style={{ borderLeft: "1px solid var(--line)", padding: "30px 26px 30px 26px" }}>
              <span
                className="absolute left-[-1px] top-0"
                style={{ width: 1, height: 42, background: "var(--accent)" }}
              />
              <div style={{ fontFamily: "var(--display)", fontSize: "0.82rem", color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 14 }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 9 }}>{s.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-dim)" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
