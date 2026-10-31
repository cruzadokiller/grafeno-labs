import { B } from "./SectionHead";

export default function EduHero() {
  return (
    <section id="top" className="relative text-center" style={{ padding: "150px 0 56px" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 880 }}>
        <div className="hero-in">
          <span className="eyebrow">Educación superior</span>
        </div>
        <h1
          className="hero-in d1"
          style={{ fontSize: "clamp(2.3rem,5.4vw,4rem)", fontWeight: 700, margin: "18px 0" }}
        >
          Más postulantes.
          <br />
          <span className="chrome-text">Más matrícula.</span>
        </h1>
        <p
          className="hero-in d2 mx-auto"
          style={{
            fontSize: "clamp(1.05rem,1.8vw,1.26rem)",
            color: "var(--ink-dim)",
            maxWidth: 640,
            marginBottom: 38,
            lineHeight: 1.65,
          }}
        >
          El marketing que llena vacantes no termina en un formulario: acompaña al postulante{" "}
          <B>desde que descubre tu institución hasta que firma la matrícula</B>. Eso es lo que
          construimos.
        </p>
        <div className="hero-in d3 flex gap-4 justify-center flex-wrap">
          <a href="#contacto-edu" className="btn btn-primary">
            Agenda un diagnóstico sin costo <span className="arrow">→</span>
          </a>
          <a href="#funnel" className="btn btn-ghost">
            Ver cómo trabajamos
          </a>
        </div>
      </div>
    </section>
  );
}
