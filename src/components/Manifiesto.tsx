export default function Manifiesto() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "rgba(255,255,255,.012)",
        padding: "104px 0",
      }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal text-center">
          <span
            style={{
              fontSize: "3rem",
              color: "var(--accent)",
              opacity: 0.5,
              lineHeight: 0,
              marginBottom: 24,
              display: "block",
            }}
          >
            /
          </span>
          <blockquote
            style={{
              maxWidth: 880,
              margin: "0 auto",
              fontFamily: "var(--display)",
              fontWeight: 300,
              lineHeight: 1.32,
              fontSize: "clamp(1.5rem,3.4vw,2.5rem)",
              letterSpacing: "-0.01em",
              color: "var(--ink-dim)",
            }}
          >
            En Grafeno Labs{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              no construimos webs
            </strong>
            , construimos ecosistemas. Un laboratorio donde la{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              arquitectura técnica
            </strong>{" "}
            se convierte en estrategia comercial de{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              alto rendimiento
            </strong>
            .
          </blockquote>
          <div
            style={{
              marginTop: 34,
              fontFamily: "var(--display)",
              fontSize: "0.82rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            — Manifiesto Grafeno Labs
          </div>
        </div>
      </div>
    </section>
  );
}
