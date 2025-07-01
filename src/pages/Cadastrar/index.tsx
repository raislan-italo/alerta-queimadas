import http from "@/api";
import Header from "@/components/Header";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import CadastroForm from "@/components/CadastroForm";

interface ICadastroForm {
  nome: string;
  email: string;
  senha: string;
}

export default function Cadastrar() {
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<{
    tipo: "sucesso" | "erro";
    texto: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleCadastrar = async (dados: ICadastroForm) => {
    setLoading(true);
    setMensagem(null);

    try {
      const resposta = await http.post("/api/usuario/salvar", {
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
      });

      if (resposta.status === 200 || resposta.status === 201) {
        setMensagem({
          tipo: "sucesso",
          texto: "Cadastro realizado com sucesso! Redirecionando...",
        });

        // Redireciona para login após 2 segundos
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMensagem({
          tipo: "erro",
          texto: "Erro ao cadastrar. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setMensagem({
        tipo: "erro",
        texto: "Erro ao conectar ao servidor. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {mensagem && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium font-[Poppins] ${
                mensagem.tipo === "sucesso"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {mensagem.texto}
            </div>
          )}

          <CadastroForm onCadastrar={handleCadastrar} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
