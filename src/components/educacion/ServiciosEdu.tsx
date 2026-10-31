import { ServiceCard, serviceIconStyle, type Service } from "@/components/Services";
import SectionHead from "./SectionHead";

const services: Service[] = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" style={serviceIconStyle}>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
    title: "Campañas de admisión",
    description: "Medios pagados y orgánicos orientados a postulación, por carrera, sede o periodo de admisión.",
    items: ["Google Ads, Meta y RRSS", "SEO/GEO para carreras", "Segmentación por campaña"],
    delay: "",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" style={serviceIconStyle}>
        <path d="M4 4h16v12H4z" />
        <path d="M4 20h16M9 16v4M15 16v4" />
      </svg>
    ),
    title: "Landing & funnels de postulación",
    description: "Páginas de carrera y formularios que convierten, con la analítica instalada desde el día uno.",
    items: ["Landing pages por carrera", "Marcaje y medición (GTM · GA4)", "CRM y seguimiento de postulantes"],
    delay: "d1",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" style={serviceIconStyle}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
    title: "Automatización & IA",
    description:
      "Respuesta inmediata a consultas de postulantes y seguimiento automatizado que descongestiona a admisión.",
    items: ["Agentes para preguntas frecuentes", "Seguimiento y recordatorios", "Integración con tus sistemas"],
    delay: "d2",
  },
];

export default function ServiciosEdu() {
  return (
    <section id="servicios-edu" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <SectionHead
          center
          eyebrow="Qué hacemos"
          title={
            <>
              Servicios para <span className="chrome-text">admisión y matrícula</span>.
            </>
          }
        >
          Piezas que combinamos según el objetivo de cada proceso de admisión.
        </SectionHead>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
