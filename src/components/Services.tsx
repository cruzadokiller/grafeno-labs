const services = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.6 }}>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
    title: "Transformación Digital",
    description:
      "Auditamos tu ecosistema, diseñamos arquitectura headless y trazamos un roadmap tecnológico alineado a tus objetivos comerciales.",
    items: [
      "Auditoría técnica y de conversión (CRO)",
      "Arquitectura headless & ecosistemas escalables",
      "Roadmap tecnológico con prioridades de negocio",
    ],
    delay: "",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.6 }}>
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9z" />
        <path d="M12 11v9M4 6.5l8 4.5 8-4.5" />
      </svg>
    ),
    title: "Factoría de MVPs",
    description:
      "Desarrollo ágil orientado a validar hipótesis de negocio: pasas de la idea al producto en el mercado sin sobreinvertir.",
    items: [
      "Del concepto al MVP en ciclos cortos",
      "Validación real con usuarios y métricas",
      "Base técnica lista para escalar",
    ],
    delay: "d1",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.6 }}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
    title: "Inteligencia Artificial",
    description:
      "Implementamos agentes y sistemas RAG que recuperan tu conocimiento y optimizan la eficiencia operativa donde más cuesta.",
    items: [
      "Agentes y automatización de procesos",
      "RAG sobre tu conocimiento interno",
      "Eficiencia operativa medible",
    ],
    delay: "d2",
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal text-center mx-auto mb-14" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Servicios</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Tres frentes, una{" "}
            <span className="chrome-text">misma lógica</span>: que la tecnología venda.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            Cada servicio traduce decisiones de ingeniería en resultados de negocio medibles
            para quienes toman decisiones.
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  icon,
  title,
  description,
  items,
  delay,
}: (typeof services)[number]) {
  return (
    <div
      className={`reveal ${delay} relative overflow-hidden group transition-all duration-300`}
      style={{
        border: "1px solid var(--line)",
        borderRadius: 18,
        padding: "34px 30px 32px",
        background: "linear-gradient(180deg,rgba(255,255,255,.028),rgba(255,255,255,0))",
      }}
    >
      {/* top shine on hover */}
      <div
        className="absolute left-0 right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          height: 1,
          background: "linear-gradient(90deg,transparent,rgba(95,180,255,.5),transparent)",
        }}
      />

      <span
        className="absolute top-6 right-7"
        style={{
          fontFamily: "var(--display)",
          fontSize: "0.8rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        {num}
      </span>

      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: 13,
          border: "1px solid var(--line-strong)",
          display: "grid",
          placeItems: "center",
          marginBottom: 24,
          background: "rgba(95,180,255,.05)",
        }}
      >
        {icon}
      </div>

      <h3 style={{ fontSize: "1.32rem", fontWeight: 600, marginBottom: 12 }}>{title}</h3>
      <p style={{ color: "var(--ink-dim)", fontSize: "0.96rem", marginBottom: 20 }}>
        {description}
      </p>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{ fontSize: "0.88rem", color: "var(--ink)", display: "flex", gap: 10, alignItems: "flex-start" }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 6,
                height: 6,
                marginTop: 8,
                background: "var(--accent)",
                transform: "rotate(45deg)",
                boxShadow: "0 0 6px rgba(95,180,255,.6)",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
