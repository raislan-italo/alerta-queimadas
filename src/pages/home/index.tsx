import AjudaSection from "@/components/AjudaSection";
import ChamadaIformacaoSection from "@/components/ChamadaInformacaoSection";
import ExpandButton from "@/components/ExpandButton";
import ExtraContentSection from "@/components/ExtraContentSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PublicoAlvoSection from "@/components/PublicoAlvoSection";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [expandir, setExpandir] = useState(false);
  const [scrollParaAjuda, setScrollParaAjuda] = useState(false);
  const ajudaRef = useRef<HTMLDivElement | null>(null);

  // Faz scroll suave após expandir
  useEffect(() => {
    if (expandir && scrollParaAjuda && ajudaRef.current) {
      ajudaRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollParaAjuda(false);
    }
  }, [expandir, scrollParaAjuda]);

  return (
    <>
      <Header />
      <HeroSection />
      <PublicoAlvoSection />
      <ChamadaIformacaoSection
        onScrollClick={() => {
          setExpandir(true);
          setScrollParaAjuda(true);
        }}
      />
      <ExpandButton onClick={() => setExpandir(!expandir)} isExpanded={expandir} />
      {expandir && (
        <>
          <ExtraContentSection />
          <div ref={ajudaRef}>
            <AjudaSection />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
