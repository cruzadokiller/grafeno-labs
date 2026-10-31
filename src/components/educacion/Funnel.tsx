import { Steps } from "@/components/Proceso";
import SectionHead, { elevatedSection } from "./SectionHead";

const stages = [
  { n: "ETAPA 01", title: "Atracción", text: "Campañas y contenidos que llegan al postulante correcto: orgánico (SEO/GEO), Google y Meta Ads." },
  { n: "ETAPA 02", title: "Interés & postulación", text: "Landing pages y formularios de postulación claros, rápidos y optimizados para convertir la visita en lead." },
  { n: "ETAPA 03", title: "Conversión", text: "Seguimiento de leads conectado a admisión: nada se pierde entre el clic y el contacto humano." },
  { n: "ETAPA 04", title: "Matrícula", text: "Medimos la matrícula como resultado final y optimizamos la inversión hacia lo que realmente llena vacantes." },
];

export default function Funnel() {
  return (
    <section id="funnel" style={elevatedSection}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <SectionHead
          eyebrow="El funnel de admisión"
          title={
            <>
              Cuatro etapas, <span className="chrome-text">medidas de punta a punta</span>.
            </>
          }
        >
          Trabajamos cada etapa como parte de un mismo sistema, con la medición instalada para saber
          qué mover.
        </SectionHead>
        <Steps steps={stages} />
      </div>
    </section>
  );
}
