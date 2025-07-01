import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AjudaSection() {
  const acoes = [
    "Não coloque fogo em lixo ou vegetação seca, mesmo em pequenos quintais ou terrenos baldios.",
    "Nunca jogue bitucas de cigarro em áreas verdes ou estradas — um simples descuido pode causar incêndios devastadores.",
    "Denuncie queimadas ilegais ao Corpo de Bombeiros (193), Defesa Civil ou órgãos ambientais.",
    "Participe de ações de educação ambiental em escolas, comunidades e redes sociais.",
    "Converse com sua família, amigos e vizinhos sobre os riscos das queimadas e como evitá-las.",
    "Valorize e compartilhe iniciativas sustentáveis, como reflorestamento, agroecologia e turismo consciente.",
  ];

  return (
    <section className="bg-white py-4 px-4 text-center font-main">
      <h3 className="text-2xl md:text3xl font-bold text-[#3f6b0d] mb-2">
        {" "}
        O que podemos faze para ajudar?{" "}
      </h3>

      <p className="mb-8 text-gray-700">
        Mesmo pequenas ações fazem grande diferença.{" "}
        <span className="font-semibold text-[#3f6b0d]">
          Veja como você pode colaborar:
        </span>
      </p>

      <div className="flex flex-col items-start max-w-3xl mx-auto space-y-3 mb-12">
        {acoes.map((acao, index) => (
          <div
            key={index}
            className="flex items-start bg-[#e5f5d5] px-4 py-4 rounded-md w-full"
          >
            <CheckCircle className="w-5 h-5 text-[#3f6b0d] mr-2 flex-shrink-0 mt-1" />
            <span className="text-left text-gray-700 text-sm"> {acao} </span>
          </div>
        ))}
      </div>

      {/* Bloco 2 */}
      <div className="bg-[#3f6b0d] text-white py-12 px-6 rounded-lg mx-auto max-w-5xl mb-12 text-left flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <h4 className="text-xl md:text:2xl font-bold mb-2">Saiba mais!</h4>
          <p className="text-sm md:text-base">
            Saiba onde e quando as queimadas estão acontecendo, veja gráficos
            com focos de incêndio por região. Nosso painel reúne informações
            atualizadas para ajudar na prevenção e no combate às queimadas.
            Clique e explore!
          </p>
        </div>
        <Button className="bg-[#acd137] text-black hover:bg-[#c3ff00] transition-colors mt-4 md:mt-0 cursor-pointer">
          <Link to="/dashboard">Acessar Dashboard</Link>
        </Button>
      </div>

      {/* Bloco 3 */}
      <h3 className="text-xl md:text-2xl font-bold mb-4">
        Juntos, fazemos a diferença!
      </h3>

      <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
        Prevenir queimadas é proteger vidas, cuidar da natureza e construir um
        futuro melhor. Com informação, responsabilidade e união, podemos
        transformar nosso entorno em um lugar mais seguro e sustentável.
      </p>
    </section>
  );
}
