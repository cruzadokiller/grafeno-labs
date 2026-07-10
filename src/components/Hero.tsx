export default function Hero() {
  return (
    <section
      id="top"
      className="relative text-center"
      style={{ padding: "170px 0 96px" }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 980 }}>
        <h1
          className="hero-in"
          style={{ fontSize: "clamp(2.6rem,6.4vw,5.1rem)", fontWeight: 700, marginBottom: 26 }}
        >
          <span className="block overflow-hidden">No construimos webs.</span>
          <span className="block overflow-hidden">
            Construimos <span className="chrome-text">crecimiento digital</span>.
          </span>
        </h1>

        <p
          className="hero-in d2 mx-auto"
          style={{
            fontSize: "clamp(1.05rem,1.9vw,1.32rem)",
            color: "var(--ink-dim)",
            fontWeight: 400,
            maxWidth: 660,
            marginBottom: 42,
            lineHeight: 1.65,
          }}
        >
          Operamos como un{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
            laboratorio de experimentación
          </strong>{" "}
          donde la arquitectura técnica es el soporte de una estrategia
          comercial de alto rendimiento.
        </p>

        <div className="hero-in d3 flex gap-4 justify-center flex-wrap">
          <a href="#contacto" className="btn btn-primary">
            Tengo un desafío específico <span className="arrow">→</span>
          </a>
          <a href="#servicios" className="btn btn-ghost">
            Explorar capacidades
          </a>
        </div>

        <div
          className="hero-in d3 flex gap-9 justify-center flex-wrap mt-14"
          style={{
            fontFamily: "var(--display)",
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {["Marketing & CRO", "Arquitectura Headless", "Factoría de MVPs", "IA Aplicada"].map(
            (label) => (
              <span key={label} className="flex items-center gap-2">
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {label}
              </span>
            )
          )}
        </div>

        {/* Path cards */}
        <div
          className="grid gap-4 mx-auto mt-14"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            maxWidth: 760,
          }}
        >
          <PathCard
            tag="Para empresas"
            title="Modernizar el ecosistema"
            description="Auditoría técnica, arquitectura headless y un roadmap con prioridades de negocio."
            href="#servicios"
          />
          <PathCard
            tag="Para founders"
            title="Validar la idea"
            description="De la hipótesis al MVP en ciclos cortos. Menos inversión, más aprendizaje."
            href="#servicios"
          />
        </div>
      </div>
    </section>
  );
}

function PathCard({
  tag,
  title,
  description,
  href,
}: {
  tag: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="reveal text-left no-underline transition-all duration-300 group relative overflow-hidden"
      style={{
        padding: "26px 26px 24px",
        border: "1px solid var(--line)",
        borderRadius: 16,
        background: "linear-gradient(165deg,rgba(255,255,255,.035),rgba(255,255,255,0))",
        color: "var(--ink)",
        display: "block",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderRadius: 16,
          background:
            "radial-gradient(120% 120% at 0% 0%,rgba(95,180,255,.14),transparent 55%)",
        }}
      />
      <p
        style={{
          fontFamily: "var(--display)",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: 12,
        }}
      >
        {tag}
      </p>
      <h3 style={{ fontSize: "1.18rem", marginBottom: 7, fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.92rem", color: "var(--ink-dim)", marginBottom: 14 }}>
        {description}
      </p>
      <span
        className="inline-flex items-center gap-2 group-hover:[&_.arrow]:translate-x-1"
        style={{ fontFamily: "var(--display)", fontSize: "0.84rem", fontWeight: 600, color: "var(--ink)" }}
      >
        Explorar <span className="arrow transition-transform duration-300">→</span>
      </span>
    </a>
  );
}
