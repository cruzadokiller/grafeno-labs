"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "54px 0 40px", background: "var(--bg-elev)" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="flex justify-between gap-10 flex-wrap mb-10">
          <div style={{ maxWidth: 300 }}>
            <Link href="#top" className="flex items-center gap-3 no-underline" style={{ color: "var(--ink)" }}>
              <Image
                src="/logo.png"
                alt="Grafeno Labs"
                width={120}
                height={32}
                style={{ height: 32, width: "auto", filter: "drop-shadow(0 0 9px rgba(95,180,255,.22))" }}
              />
              <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "1.06rem", letterSpacing: "0.16em" }}>
                <strong>GRAFENO</strong>{" "}
                <span style={{ fontWeight: 300, color: "var(--ink-dim)" }}>LABS</span>
              </span>
            </Link>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: 16, lineHeight: 1.6 }}>
              Laboratorio de ecosistemas digitales. Arquitectura, producto e IA al servicio de tu
              estrategia comercial.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <FootCol
              title="Servicios"
              links={[
                { href: "#servicios", label: "Transformación digital" },
                { href: "#servicios", label: "Factoría de MVPs" },
                { href: "#servicios", label: "Inteligencia artificial" },
                { href: "#capacidades", label: "Marketing & CRO" },
              ]}
            />
            <FootCol
              title="Laboratorio"
              links={[
                { href: "#proceso", label: "Cómo trabajamos" },
                { href: "#faq", label: "Preguntas frecuentes" },
                { href: "#contacto", label: "Iniciar proyecto" },
              ]}
            />
          </div>
        </div>

        <div
          className="flex justify-between flex-wrap gap-4"
          style={{ borderTop: "1px solid var(--line)", paddingTop: 24, fontSize: "0.82rem", color: "var(--muted)" }}
        >
          <span>© {year} Grafeno Labs. Todos los derechos reservados.</span>
          <span>Construyendo ecosistemas, no solo webs.</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "var(--display)",
          fontSize: "0.74rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-dim)",
          marginBottom: 16,
        }}
      >
        {title}
      </h4>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="block no-underline transition-colors duration-200"
          style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 11 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
