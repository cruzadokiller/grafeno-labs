const steps = [
  { n: "FASE 01", title: "Diagnóstico", text: "Entendemos tu objetivo de negocio (ventas, leads o matrícula) y dónde se pierde hoy a lo largo del funnel." },
  { n: "FASE 02", title: "Hipótesis", text: "Definimos qué acción mueve más la aguja comercial con el menor riesgo y cómo la vamos a medir." },
  { n: "FASE 03", title: "Construcción", text: "Ejecutamos: campaña, landing, desarrollo o agente de IA, según lo que el objetivo necesite, en ciclos cortos." },
  { n: "FASE 04", title: "Medición", text: "Seguimos el impacto en las métricas que importan y escalamos solo lo que demuestra retorno." },
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

        <Steps steps={steps} />
      </div>
    </section>
  );
}

export function Steps({ steps }: { steps: { n: string; title: string; text: string }[] }) {
  return (
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
  );
}
