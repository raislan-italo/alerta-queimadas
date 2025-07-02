import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AjudaSection() {
  const acoes = [
    "Evite colocar fogo em lixo ou vegetação seca, mesmo em quintais ou terrenos baldios.",
    "Nunca jogue bitucas de cigarro em áreas verdes ou à beira de estradas — um pequeno descuido pode causar grandes incêndios.",
    "Denuncie queimadas ilegais ao Corpo de Bombeiros (193), Defesa Civil ou órgãos ambientais locais.",
    "Apoie ações de educação ambiental em escolas, comunidades e redes sociais.",
    "Converse com sua família, amigos e vizinhos sobre os riscos e formas de prevenção das queimadas.",
    "Valorize e divulgue iniciativas sustentáveis, como reflorestamento, agroecologia e turismo consciente.",
  ];

  return (
    <section className="bg-white text-center font-main">
      <h3 className="text-2xl md:text-3xl font-bold text-[#3f6b0d] mb-2">
        O que podemos fazer para ajudar?
      </h3>

      <p className="mb-8 text-gray-700">
        Pequenas atitudes podem gerar grandes transformações.{" "}
        <span className="font-semibold text-[#3f6b0d]">
          Veja como você pode contribuir:
        </span>
      </p>

      {/* Lista de Ações */}
      <div className="flex flex-col gap-3 max-w-4xl mx-auto mb-16 px-4">
        {acoes.map((acao, index) => (
          <div
            key={index}
            className="flex items-start bg-[#e5f5d5] px-4 py-3 rounded-md"
          >
            <CheckCircle className="w-5 h-5 text-[#3f6b0d] mr-3 mt-1 shrink-0" />
            <p className="text-sm text-left text-[#1d1d1d]">{acao}</p>
          </div>
        ))}
      </div>

      {/* Bloco 2 */}
      <div className="bg-[#3f6b0d] text-white py-12 px-6 md:px-12 rounded-md mx-4 md:mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl">
        <div className="md:w-2/3">
          <h4 className="text-2xl md:text-3xl font-bold mb-3">Saiba mais!</h4>
          <p className="text-sm md:text-base">
            Descubra onde e quando as queimadas estão acontecendo, visualize gráficos por região e acompanhe dados em tempo real. Nosso painel reúne informações atualizadas para ajudar na prevenção e no combate às queimadas. Clique e explore!
          </p>
        </div>
        <Button className="bg-[#acd137] text-black hover:bg-[#c3ff00] transition-colors text-lg font-semibold w-fit self-center md:self-auto">
          <Link to="/dashboard">Acessar Dashboard</Link>
        </Button>
      </div>

      {/* Bloco 3 */}
      <div className="p-10 px-4 md:px-10">
        <h3 className="text-xl md:text-4xl font-bold mb-4">
          Juntos, fazemos a diferença!
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
          Prevenir queimadas é proteger vidas, cuidar do meio ambiente e garantir um futuro melhor. Com informação, consciência e união, podemos transformar nosso entorno em um lugar mais seguro, saudável e sustentável.
        </p>
      </div>
    </section>
  );
}
