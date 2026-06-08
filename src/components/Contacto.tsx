"use client";

import { useState } from "react";

const points = [
  "Diagnóstico inicial sin compromiso",
  "Propuesta clara con plazos y entregables",
  "Comunicación directa con quien decide",
  "Resultados medibles desde la primera iteración",
];

const projectTypes = [
  "Marketing & posicionamiento (SEO/SEM)",
  "Desarrollo web o aplicación",
  "E-commerce",
  "Inteligencia artificial (agentes / RAG)",
  "Transformación digital / Arquitectura",
  "Otro / no estoy seguro",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(0,0,0,.35)",
  border: "1px solid var(--line-strong)",
  borderRadius: 10,
  padding: "13px 15px",
  color: "var(--ink)",
  fontFamily: "var(--body)",
  fontSize: "0.96rem",
  transition: "0.2s",
  outline: "none",
};

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: String(data.get("nombre") || ""),
      empresa: String(data.get("empresa") || ""),
      email: String(data.get("email") || ""),
      reto: String(data.get("reto") || ""),
      mensaje: String(data.get("mensaje") || ""),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "No se pudo enviar el mensaje.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contacto"
      style={{
        borderTop: "1px solid var(--line)",
        background:
          "radial-gradient(ellipse 70% 120% at 50% 0%,rgba(95,180,255,.08),transparent 60%), var(--bg)",
        padding: "104px 0",
      }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="grid gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Iniciar proyecto</span>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.1rem)", margin: "18px 0 18px" }}>
              Cuéntanos tu <span className="chrome-text">desafío</span>.
            </h2>
            <p style={{ color: "var(--ink-dim)", fontSize: "1.05rem", marginBottom: 30 }}>
              Si tienes un problema concreto que resolver, una hipótesis que validar o un
              ecosistema que modernizar, empecemos por una conversación.
            </p>
            <div className="flex flex-col gap-4">
              {points.map((p) => (
                <div key={p} className="flex gap-3 items-start" style={{ fontSize: "0.95rem", color: "var(--ink)" }}>
                  <svg
                    viewBox="0 0 24 24"
                    style={{ flexShrink: 0, width: 20, height: 20, stroke: "var(--accent)", fill: "none", strokeWidth: 1.8, marginTop: 2 }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal d1"
            style={{
              border: "1px solid var(--line)",
              borderRadius: 20,
              padding: 34,
              background: "linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.008))",
              boxShadow: "0 40px 90px -50px rgba(0,0,0,1)",
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} autoComplete="on">
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
                  Formulario seguro
                </span>
                <h3 style={{ fontSize: "1.32rem", fontWeight: 600, margin: "10px 0 22px" }}>
                  Trabajemos juntos.
                </h3>

                <Field label="Nombre">
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required style={inputStyle} />
                </Field>
                <Field label="Empresa">
                  <input id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" style={inputStyle} />
                </Field>
                <Field label="Email">
                  <input id="email" name="email" type="email" placeholder="nombre@empresa.com" required style={inputStyle} />
                </Field>
                <Field label="Tipo de proyecto">
                  <select id="reto" name="reto" required defaultValue="" style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Contexto">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos qué quieres construir o validar"
                    style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
                  />
                </Field>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                  style={{ width: "100%", justifyContent: "center", marginTop: 6, opacity: sending ? 0.7 : 1, cursor: sending ? "wait" : "pointer" }}
                >
                  {sending ? "Enviando…" : "Enviar mensaje"} <span className="arrow">→</span>
                </button>
                {error && (
                  <p style={{ fontSize: "0.84rem", color: "#ff8a8a", marginTop: 12, textAlign: "center" }}>
                    {error}
                  </p>
                )}
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 14, textAlign: "center" }}>
                  Te respondemos en menos de 24 horas hábiles.
                </p>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 8px" }}>
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: 46, height: 46, stroke: "var(--accent)", fill: "none", strokeWidth: 1.6, marginBottom: 14, margin: "0 auto 14px" }}
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h3 className="chrome-text" style={{ marginBottom: 8 }}>
                  Mensaje recibido
                </h3>
                <p style={{ color: "var(--ink-dim)", fontSize: "0.94rem" }}>
                  Gracias. Un miembro del laboratorio revisará tu caso y te contactará pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--display)",
          fontSize: "0.78rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-dim)",
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
