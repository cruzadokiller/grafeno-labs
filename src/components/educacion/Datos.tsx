import SectionHead, { B } from "./SectionHead";

export default function Datos() {
  return (
    <section id="datos" style={{ padding: "104px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 1180 }}>
        <SectionHead
          maxWidth={760}
          eyebrow="Protección de datos"
          title={
            <>
              Datos de estudiantes, <span className="chrome-text">tratados con rigor</span>.
            </>
          }
        >
          Trabajar admisión implica manejar datos personales de postulantes y estudiantes. Diseñamos
          la captación y el seguimiento con la <B>protección de datos como prioridad</B>,
          considerando la Ley 21.719 de protección de datos personales: consentimiento claro,
          finalidad definida y trazabilidad de la información. La medición nunca va en contra del
          cuidado de los datos.
        </SectionHead>
      </div>
    </section>
  );
}
