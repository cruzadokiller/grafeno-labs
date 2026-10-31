"use client";

import { useState } from "react";
import Link from "next/link";

// `text` es la versión en texto plano de la respuesta, para los datos estructurados (JSON-LD).
const faqs: { q: string; a: React.ReactNode; text: string }[] = [
  {
    q: "¿Cómo miden el retorno de una campaña o inversión en marketing?",
    a: (
      <>
        Antes de invertir definimos qué significa éxito (ventas, leads o matrículas) y dejamos la{" "}
        <strong>medición instalada</strong>: GA4, Tag Manager y paneles en Looker Studio que
        conectan cada peso con su resultado. Así sabes el costo por lead o por venta y qué canal
        rinde, en lugar de reportes de impresiones que no dicen nada del negocio.
      </>
    ),
    text: "Antes de invertir definimos qué significa éxito (ventas, leads o matrículas) y dejamos la medición instalada: GA4, Tag Manager y paneles en Looker Studio que conectan cada peso con su resultado. Así sabes el costo por lead o por venta y qué canal rinde.",
  },
  {
    q: "¿Trabajan con instituciones de educación superior?",
    a: (
      <>
        Sí, es uno de nuestros focos. Entendemos el <strong>funnel de admisión</strong> completo:
        desde la captación del interesado hasta la matrícula, pasando por postulación y
        conversión. Combinamos marketing, campañas y tecnología para llenar vacantes, con especial
        cuidado en la <strong>protección de los datos</strong> de postulantes y estudiantes,
        considerando la Ley 21.719. Puedes ver el detalle en nuestra{" "}
        <Link href="/educacion" style={{ color: "var(--accent)", textDecoration: "none" }}>
          propuesta para educación superior
        </Link>
        .
      </>
    ),
    text: "Sí, es uno de nuestros focos. Entendemos el funnel de admisión completo, de la captación a la matrícula, combinando marketing, campañas y tecnología, con especial cuidado en la protección de los datos de postulantes y estudiantes.",
  },
  {
    q: "¿Cómo se coordinan con mi equipo comercial o de admisión?",
    a: (
      <>
        Trabajamos pegados a tu equipo, no en paralelo. Conectamos los <strong>leads</strong> que
        generamos con tu proceso comercial o de admisión (CRM, planillas o el sistema que uses),
        acordamos cómo se hace el seguimiento y revisamos juntos los números. El marketing sirve
        de poco si el lead se pierde al llegar al equipo de ventas.
      </>
    ),
    text: "Trabajamos pegados a tu equipo: conectamos los leads que generamos con tu proceso comercial o de admisión (CRM o el sistema que uses), acordamos el seguimiento y revisamos juntos los números.",
  },
  {
    q: "¿Qué es el CRO y cómo impacta en mis ventas?",
    a: (
      <>
        El <strong>CRO</strong> (optimización de la tasa de conversión) consiste en lograr que
        un mayor porcentaje de tus visitantes haga lo que esperas: comprar, registrarse o
        contactar. En vez de gastar más en atraer tráfico, exprimimos mejor el que ya tienes
        mediante experimentación y datos. Es una de las palancas de mayor retorno: pequeñas
        mejoras de conversión multiplican ingresos sin aumentar el costo de adquisición.
      </>
    ),
    text: "El CRO (optimización de la tasa de conversión) busca que más visitantes hagan lo que esperas: comprar, registrarse o contactar. En vez de gastar más en tráfico, aprovechamos mejor el que ya tienes mediante experimentación y datos.",
  },
  {
    q: "¿Cómo aplican inteligencia artificial en empresas reales?",
    a: (
      <>
        Trabajamos con casos concretos, no con promesas. Implementamos <strong>agentes</strong>{" "}
        que ejecutan tareas operativas y sistemas <strong>RAG</strong> que responden con el
        conocimiento real de tu empresa (documentos, procesos, catálogo) en lugar de inventar.
        El objetivo siempre es la <strong>eficiencia operativa medible</strong>: menos horas en
        tareas repetitivas, respuestas consistentes y decisiones mejor informadas.
      </>
    ),
    text: "Implementamos agentes que ejecutan tareas operativas y sistemas RAG que responden con el conocimiento real de la empresa en lugar de inventar. El objetivo es la eficiencia operativa medible: menos horas en tareas repetitivas y mejores decisiones.",
  },
  {
    q: "¿Qué es la arquitectura headless y por qué la recomiendan?",
    a: (
      <>
        La <strong>arquitectura headless</strong> separa la capa visual (el front-end que ve tu
        cliente) de la capa de contenido y datos (el back-end). En la práctica significa más
        velocidad, mejor SEO técnico y la libertad de cambiar el escaparate sin reconstruir todo
        el motor. Para el negocio: iteras más rápido, escalas sin reescribir y reduces el costo
        de cada cambio futuro.
      </>
    ),
    text: "La arquitectura headless separa la capa visual (front-end) de la capa de contenido y datos (back-end). Aporta más velocidad, mejor SEO técnico y la libertad de cambiar el escaparate sin reconstruir el motor.",
  },
  {
    q: "¿En cuánto tiempo puedo validar un MVP?",
    a: (
      <>
        Depende del alcance, pero nuestra <strong>factoría de MVPs</strong> está diseñada para
        llegar al mercado en ciclos cortos, normalmente de semanas, no meses. La meta no es
        construir el producto final, sino <strong>validar la hipótesis de negocio</strong> con
        usuarios reales antes de invertir a fondo. Si funciona, ya tienes una base técnica
        preparada para escalar.
      </>
    ),
    text: "Nuestra factoría de MVPs llega al mercado en ciclos cortos, normalmente semanas. La meta no es el producto final, sino validar la hipótesis de negocio con usuarios reales antes de invertir a fondo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.text },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "104px 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <div className="reveal text-center mx-auto mb-14" style={{ maxWidth: 680 }}>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>
            Lo técnico, traducido a <span className="chrome-text">valor</span>.
          </h2>
        </div>

        <div
          className="reveal d1 mx-auto flex flex-col"
          style={{ maxWidth: 820, borderTop: "1px solid var(--line)" }}
        >
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button
        className="w-full bg-transparent border-0 cursor-pointer text-left flex justify-between items-center gap-6"
        style={{
          padding: "26px 4px",
          color: open ? "var(--accent)" : "var(--ink)",
          fontFamily: "var(--display)",
          fontWeight: 500,
          fontSize: "clamp(1.02rem,2vw,1.18rem)",
          transition: "0.2s",
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="relative flex-shrink-0" style={{ width: 26, height: 26 }}>
          <span
            className="absolute transition-transform duration-300"
            style={{
              background: "var(--accent)",
              left: "50%",
              top: 4,
              bottom: 4,
              width: 1.6,
              transform: open ? "translateX(-50%) rotate(90deg)" : "translateX(-50%)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="absolute"
            style={{
              background: "var(--accent)",
              top: "50%",
              left: 4,
              right: 4,
              height: 1.6,
              transform: "translateY(-50%)",
            }}
          />
        </span>
      </button>
      {/* grid 0fr -> 1fr anima la altura sin medir el DOM */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows .4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              padding: "0 4px 28px",
              color: "var(--ink-dim)",
              fontSize: "0.99rem",
              lineHeight: 1.72,
              maxWidth: 720,
            }}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}
