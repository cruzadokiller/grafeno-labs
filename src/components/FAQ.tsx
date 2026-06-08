"use client";

import { useRef, useState } from "react";

const faqs = [
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
  },
  {
    q: "¿Trabajan con empresas de cualquier tamaño?",
    a: (
      <>
        Sí. Colaboramos con organizaciones de todos los tamaños, desde startups que validan su
        primera idea hasta empresas consolidadas que modernizan su ecosistema digital. Lo que
        pedimos en común es que exista una <strong>persona tomadora de decisiones</strong>{" "}
        dispuesta a trabajar con evidencia y resultados.
      </>
    ),
  },
  {
    q: "¿Qué diferencia a una consultoría digital de una agencia tradicional?",
    a: (
      <>
        Una agencia tradicional suele entregar piezas sueltas (una web, una campaña). Como{" "}
        <strong>consultoría digital</strong> y laboratorio, partimos de tu estrategia comercial
        y diseñamos el ecosistema completo que la sostiene: arquitectura, conversión, producto e
        IA trabajando como un sistema. No vendemos entregables; construimos capacidades que
        siguen generando valor.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "104px 0" }}>
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
  const innerRef = useRef<HTMLDivElement>(null);

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
      <div
        style={{
          maxHeight: open ? innerRef.current?.scrollHeight ?? 1000 : 0,
          overflow: "hidden",
          transition: "max-height .4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <div
          ref={innerRef}
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
  );
}
