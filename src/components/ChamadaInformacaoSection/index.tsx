import { Button } from "@/components/ui/button";

interface Props {
  onScrollClick: () => void;
}

export default function ChamadaIformacaoSection({ onScrollClick }: Props) {
  return (
    <section className="bg-[#3f6b0d] py-12 text-center px-4 font-[Poppins]">
      <h3 className="text-3xl font-bold mb-4 text-white">Informação que gera ação</h3>
      <p className="text-lg font-medium max-w-3xl mx-auto text-white">
        O objetivo é fortalecer a participação social e o combate às queimadas
        por<br /> meio da informação, da transparência e da ação coletiva.
      </p>
      <div className="mt-6">
        <Button
          onClick={onScrollClick}
          className="bg-[#acd137] hover:bg-[#c3ff00] text-black font-bold transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
        >
          Fique por dentro!
        </Button>
      </div>
    </section>
  );
}
