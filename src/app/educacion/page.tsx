import type { Metadata } from "next";
import Atmosphere from "@/components/Atmosphere";
import LatticeCanvas from "@/components/LatticeCanvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";
import { ExperienceSection } from "@/components/Experiencia";
import EduHero from "@/components/educacion/EduHero";
import Desafio from "@/components/educacion/Desafio";
import Funnel from "@/components/educacion/Funnel";
import ServiciosEdu from "@/components/educacion/ServiciosEdu";
import Datos from "@/components/educacion/Datos";
import Horizontes from "@/components/educacion/Horizontes";
import EduCta from "@/components/educacion/EduCta";
import { B } from "@/components/educacion/SectionHead";

const title = "Grafeno Labs para Educación Superior — Más postulantes, más matrícula";
const description =
  "Marketing, funnels de admisión y tecnología para instituciones de educación superior. De la captación a la matrícula, con medición y cuidado en la protección de datos personales.";

// openGraph y alternates se reemplazan completos (no se mezclan con los del layout).
export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://grafenolabs.cl/educacion",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://grafenolabs.cl/educacion",
    images: [{ url: "https://grafenolabs.cl/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Educacion() {
  return (
    <RevealProvider>
      <Atmosphere />
      <LatticeCanvas />
      <Navbar cta={{ href: "#contacto-edu", label: "Diagnóstico sin costo" }} />
      <main>
        <EduHero />
        <Desafio />
        <Funnel />
        <ServiciosEdu />
        <ExperienceSection
          id="experiencia-edu"
          eyebrow="Experiencia en educación"
          title={
            <>
              Conocemos la admisión <span className="chrome-text">desde adentro</span>.
            </>
          }
          intro="No llegamos a aprender cómo funciona una institución de educación superior: nuestro equipo ya dirigió admisión y marketing en el sector durante años."
        >
          Dentro del equipo tenemos experiencia directa{" "}
          <B>dirigiendo admisión y marketing en educación superior</B>: captación, postulación,
          matrícula y la coordinación entre marketing y los equipos de admisión. Esa mirada
          operativa, sumada a producto y tecnología, es la que traemos a cada proceso.
        </ExperienceSection>
        <Datos />
        <Horizontes />
        <EduCta />
      </main>
      <Footer />
    </RevealProvider>
  );
}
