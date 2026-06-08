import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contacto@grafenolabs.cl";
// Remitente: debe pertenecer a un dominio verificado en Resend.
// Mientras grafenolabs.cl no esté verificado, Resend solo permite enviar
// desde "onboarding@resend.dev" (modo de prueba).
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Grafeno Labs <onboarding@resend.dev>";

type Payload = {
  nombre?: string;
  empresa?: string;
  email?: string;
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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada en las variables de entorno.");
    return NextResponse.json(
      { ok: false, error: "El servicio de correo no está configurado." },
      { status: 500 }
    );
  }

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const { nombre, empresa, email, reto, mensaje } = data;

  if (!nombre || !email || !reto) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios (nombre, email, tipo de proyecto)." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

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
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(reto)}</p>
        ${mensaje ? `<p><strong>Contexto:</strong></p><p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
      text: [
        "Nuevo prospecto desde grafenolabs.cl",
        `Nombre: ${nombre}`,
        empresa ? `Empresa: ${empresa}` : null,
        `Email: ${email}`,
        `Tipo de proyecto: ${reto}`,
        mensaje ? `Contexto: ${mensaje}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json({ ok: false, error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error inesperado al enviar el correo:", err);
    return NextResponse.json({ ok: false, error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
