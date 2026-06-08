import Atmosphere from "@/components/Atmosphere";
import LatticeCanvas from "@/components/LatticeCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifiesto from "@/components/Manifiesto";
import Services from "@/components/Services";
import Capacidades from "@/components/Capacidades";
import Tecnologias from "@/components/Tecnologias";
import Proceso from "@/components/Proceso";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

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
