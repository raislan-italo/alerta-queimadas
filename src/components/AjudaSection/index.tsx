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
    <section className="bg-white py-12 px-6 font-main text-[#1d1d1d]">
      {/* Título */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          O que podemos fazer para ajudar?
        </h3>
        <p className="text-sm md:text-base">
          Mesmo pequenas ações fazem grande diferença.{" "}
          <span className="font-semibold text-[#3f6b0d]">
            Veja como você pode colaborar:
          </span>
        </p>
      </div>

      {/* Lista de Ações */}
      <div className="flex flex-col gap-3 max-w-4xl mx-auto mb-16">
        {acoes.map((acao, index) => (
          <div
            key={index}
            className="flex items-start bg-[#e5f5d5] px-4 py-3 rounded-md"
          >
            <CheckCircle className="w-5 h-5 text-[#3f6b0d] mr-3 mt-1" />
            <p className="text-sm text-left text-[#1d1d1d]">{acao}</p>
          </div>
        ))}
      </div>

      {/* Bloco verde escuro */}
      <div className="bg-[#3f6b0d] text-white rounded-lg py-10 px-8 mb-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h4 className="text-2xl font-bold mb-2">
              Acompanhe os dados em tempo real do Alerta Florestas
            </h4>
            <p className="text-sm md:text-base text-white">
              Saiba onde e quando as queimadas estão acontecendo. Veja gráficos com focos de incêndio por região.
              Nosso painel reúne informações atualizadas para apoiar na prevenção e combate às queimadas. Clique e explore!
            </p>
          </div>
          <div>
            <Link to="/dashboard">
              <Button className="bg-[#acd137] text-black hover:bg-[#c3ff00] transition-colors">
                Acessar Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Final: Juntos fazemos a diferença */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Juntos, fazemos a diferença!
        </h3>
        <p className="text-sm md:text-base text-[#1d1d1d]">
          Prevenir queimadas é proteger vidas, cuidar da natureza e construir um
          futuro melhor. Com informação, responsabilidade e união, podemos
          transformar nosso entorno em um lugar mais seguro e sustentável.
        </p>
      </div>
    </section>
  );
}
