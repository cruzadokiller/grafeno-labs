import Link from "next/link";

const industries = [
  {
    tag: "Empresas & pymes",
    title: "Más clientes, mejores procesos",
    description:
      "Más leads, procesos comerciales ordenados y automatización con IA para equipos que quieren crecer.",
    cta: "Conversemos",
    href: "#contacto",
    delay: "",
  },
  {
    tag: "eCommerce & retail",
    title: "Tiendas que venden",
    description:
      "De la visita a la compra: catálogo, conversión, medios pagados y una tienda online que escala.",
    cta: "Ver servicios",
    href: "#servicios",
    delay: "d1",
  },
  {
    tag: "Educación superior",
    title: "Admisión y matrícula",
    description:
      "Campañas y funnels de postulación que llenan vacantes. Tenemos una propuesta dedicada para el sector.",
    cta: "Ver propuesta",
    href: "/educacion",
    delay: "d2",
  },
];

export default function Industrias() {
  return (
    <section id="industrias" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal mb-14" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Industrias</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Trabajamos con <span className="chrome-text">cualquier industria</span>.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>
            El mismo sistema (marketing, conversión y tecnología) se adapta a tu negocio. Estos son
            algunos sectores donde ya conocemos el terreno.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.tag}
              href={ind.href}
              className={`reveal ${ind.delay} group flex flex-col gap-3 no-underline border border-line hover:border-line-strong transition-all duration-300 hover:-translate-y-1`}
              style={{
                borderRadius: 18,
                padding: "30px 28px",
                color: "var(--ink)",
                background: "linear-gradient(180deg,rgba(255,255,255,.028),rgba(255,255,255,0))",
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
                {ind.tag}
              </span>
              <h3 style={{ fontSize: "1.24rem", fontWeight: 600 }}>{ind.title}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: "0.94rem", flex: 1 }}>{ind.description}</p>
              <span
                className="inline-flex items-center gap-2"
                style={{ fontFamily: "var(--display)", fontSize: "0.84rem", fontWeight: 600, marginTop: 4 }}
              >
                {ind.cta}{" "}
                <span className="arrow transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
