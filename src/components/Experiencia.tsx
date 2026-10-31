const B = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{children}</strong>
);

export default function Experiencia() {
  return (
    <ExperienceSection
      id="experiencia"
      eyebrow="Experiencia"
      title={
        <>
          La trayectoria que <span className="chrome-text">respalda</span> cada decisión.
        </>
      }
      intro="Grafeno Labs es una empresa nueva, pero su equipo no empieza de cero."
      sectors={["Educación superior", "Telecomunicaciones", "Banca", "Automotriz", "Retail & eCommerce"]}
    >
      Nuestro equipo trae experiencia construyendo <B>producto digital, eCommerce y analítica</B>{" "}
      junto a <B>estrategia comercial, marketing y gestión de funnels</B> a gran escala. Esa
      combinación poco común (producto + comercial + tecnología) es la que traemos a cada proyecto,
      en organizaciones grandes y exigentes.
    </ExperienceSection>
  );
}

export function ExperienceSection({
  id,
  eyebrow,
  title,
  intro,
  sectors,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  sectors?: string[];
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{ borderTop: "1px solid var(--line)", background: "var(--bg-elev)", padding: "104px 0" }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-10" style={{ maxWidth: 680 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>{title}</h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>{intro}</p>
        </div>

        <span
          className="reveal inline-block"
          style={{
            fontSize: "0.86rem",
            color: "var(--muted)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 34,
          }}
        >
          Experiencia profesional del equipo, no una cartera de clientes de Grafeno Labs.
        </span>

        <div
          className="reveal d1"
          style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 26, marginBottom: sectors ? 34 : 0 }}
        >
          <p style={{ color: "var(--ink-dim)", fontSize: "0.98rem", lineHeight: 1.7 }}>{children}</p>
        </div>

        {sectors && (
          <div className="reveal d2 flex flex-wrap items-center" style={{ gap: 11 }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontSize: "0.74rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginRight: 6,
              }}
            >
              Sectores
            </span>
            {sectors.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
