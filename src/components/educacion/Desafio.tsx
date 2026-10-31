import SectionHead, { B } from "./SectionHead";

const pains = [
  {
    big: "Fuga",
    text: "Muchos leads en la parte alta del funnel, pocos llegan a matrícula. Nadie sabe bien dónde se pierden.",
    delay: "",
  },
  {
    big: "Costo",
    text: "El costo por matrícula sube cada temporada y la inversión en medios no se puede atribuir a resultados reales.",
    delay: "d1",
  },
  {
    big: "Datos",
    text: "Marketing, admisión y sistemas no hablan entre sí; los datos del estudiante quedan dispersos y sin trazabilidad.",
    delay: "d2",
  },
];

export default function Desafio() {
  return (
    <section id="desafio" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <SectionHead
          eyebrow="El desafío"
          title={
            <>
              El problema casi nunca es <span className="chrome-text">falta de interesados</span>.
            </>
          }
        >
          La mayoría de las instituciones no tiene un problema de tráfico, sino de{" "}
          <B>fugas en el funnel</B>: interesados que no postulan, postulantes que no se matriculan y
          campañas que no se pueden medir hasta el final.
        </SectionHead>

        <div className="grid gap-[18px] grid-cols-1 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.big}
              className={`reveal ${p.delay}`}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 26,
                background: "linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,0))",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                {p.big}
              </div>
              <p style={{ color: "var(--ink-dim)", fontSize: "0.95rem" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
