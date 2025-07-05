import { Button } from "@/components/ui/button";
import mapaBackground from "@/assets/img/mapaBackground.png";
import mapa from "@/assets/img/mapa.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${mapaBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-30 py-10 font-[Poppins]"
    >
      <div className="flex-1 text-white">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          Nossa <span className="text-[#acd137]">floresta</span>
          <br />
          não é cinza!
        </h1>
        <p className="text-xl md:text-3xl mb-6">
          Não às queimadas, <br />
          <span className="text-[#acd137] font-semibold">denuncie ja!</span>
        </p>
        <Button className="bg-[#acd137]  text-block hover:bg-[#c3ff00] transition-all duration-300 ease-in-out cursor-pointer hover:scale-120">
          <Link to="/denuncia" className="text-lg text-black">Clique aqui</Link>
        </Button>
      </div>

      <div className="m-2">
        <img
          src={mapa}
          alt="Mapa do Brasil"
          className="w-5xl max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
