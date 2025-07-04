import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import { ILoginForm } from "../../interfaces/IUsuarios";
import { fazerLogin } from "@/services/fazerLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<{
    tipo: "sucesso" | "erro";
    texto: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (dados: ILoginForm) => {
    setLoading(true);
    setMensagem(null);

    try {
      const resultado = await fazerLogin(dados);

      if (resultado != null) {
        localStorage.setItem("authToken", resultado.headers.authorization || "");
        localStorage.setItem("usuario", JSON.stringify(resultado.data.user.nome));

        setMensagem({
          tipo: "sucesso",
          texto: "Login realizado com sucesso!",
        });

        // Redirecionar após 1 segundo
        setTimeout(() => {
          navigate("/");
        }, 1000);

      } else {
        setMensagem({
          tipo: "erro",
          texto: "Erro no login",
        });
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setMensagem({
        tipo: "erro",
        texto: "Erro interno. Tente novamente.",
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
          {/* Mensagem de feedback */}
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

          <LoginForm onLogin={handleLogin} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
