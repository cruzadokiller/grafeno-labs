import dynamic from "next/dynamic";
import Atmosphere from "@/components/Atmosphere";
import LatticeCanvas from "@/components/LatticeCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RevealProvider from "@/components/RevealProvider";

// Below-the-fold: load lazily to reduce initial JS bundle
const Manifiesto  = dynamic(() => import("@/components/Manifiesto"));
const Services    = dynamic(() => import("@/components/Services"));
const Capacidades = dynamic(() => import("@/components/Capacidades"));
const Tecnologias = dynamic(() => import("@/components/Tecnologias"));
const Proceso     = dynamic(() => import("@/components/Proceso"));
const FAQ         = dynamic(() => import("@/components/FAQ"));
const Contacto    = dynamic(() => import("@/components/Contacto"));
const Footer      = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <RevealProvider>
      <Atmosphere />
      <LatticeCanvas />
      <Navbar />
      <main>
        <Hero />
        <Manifiesto />
        <Services />
        <Capacidades />
        <Tecnologias />
        <Proceso />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </RevealProvider>
  );
}
