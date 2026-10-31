import type { APIRoute } from "astro";
import { CONTACT_FROM_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { Resend } from "resend";

// Unica ruta que corre en el servidor; el resto del sitio es estatico.
export const prerender = false;

const TO_EMAIL = "contacto@grafenolabs.cl";
// Remitente: debe pertenecer a un dominio verificado en Resend.
// Mientras grafenolabs.cl no esté verificado, Resend solo permite enviar
// desde "onboarding@resend.dev" (modo de prueba).
const FROM_EMAIL = CONTACT_FROM_EMAIL || "Grafeno Labs <onboarding@resend.dev>";

type Payload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  reto?: string;
  mensaje?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Cuerpo de solicitud inválido." }, 400);
  }

  const { nombre, empresa, email, telefono, reto, mensaje } = data;

  if (!nombre || !email || !reto) {
    return json({ ok: false, error: "Faltan campos obligatorios (nombre, email, tipo de proyecto)." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "El email no es válido." }, 400);
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada en las variables de entorno.");
    return json({ ok: false, error: "El servicio de correo no está configurado." }, 500);
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nuevo prospecto: ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html: `
        <h2>Nuevo prospecto desde grafenolabs.cl</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        ${empresa ? `<p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>` : ""}
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>` : ""}
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(reto)}</p>
        ${mensaje ? `<p><strong>Contexto:</strong></p><p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
      text: [
        "Nuevo prospecto desde grafenolabs.cl",
        `Nombre: ${nombre}`,
        empresa ? `Empresa: ${empresa}` : null,
        `Email: ${email}`,
        telefono ? `Teléfono: ${telefono}` : null,
        `Tipo de proyecto: ${reto}`,
        mensaje ? `Contexto: ${mensaje}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Error de Resend:", error);
      return json({ ok: false, error: "No se pudo enviar el mensaje." }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("Error inesperado al enviar el correo:", err);
    return json({ ok: false, error: "No se pudo enviar el mensaje." }, 500);
  }
};
