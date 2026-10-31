import Link from "next/link";
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/site";

export default function EduCta() {
  return (
    <section
      id="contacto-edu"
      className="text-center"
      style={{
        borderTop: "1px solid var(--line)",
        background: "radial-gradient(ellipse 70% 120% at 50% 0%,rgba(95,180,255,.08),transparent 60%)",
        padding: "104px 0",
      }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 720 }}>
        <span className="eyebrow reveal">Diagnóstico sin costo</span>
        <h2 className="reveal d1" style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
          Veamos juntos dónde está <span className="chrome-text">tu fuga</span>.
        </h2>
        <p className="reveal d2" style={{ color: "var(--ink-dim)", fontSize: "1.06rem", marginBottom: 30 }}>
          Agenda una conversación. Revisamos tu proceso de admisión actual y te mostramos, sin
          compromiso, dónde se pierden postulantes y qué haríamos primero.
        </p>
        <div className="reveal d2 flex gap-4 justify-center flex-wrap items-center">
          <a
            href={whatsappUrl("Hola Grafeno Labs, quiero un diagnóstico para admisión")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Agendar por WhatsApp <span className="arrow">→</span>
          </a>
          <Link href="/#contacto" className="btn btn-ghost">
            Dejar mis datos
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="no-underline transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--ink-dim)", fontSize: "0.95rem", borderBottom: "1px solid var(--line-strong)", paddingBottom: 2 }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
