import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import IUsuario from "@/interfaces/IUsuarios";

interface Props {
  onCadastrar: (dados: IUsuario) => void;
  loading?: boolean;
}

export default function CadastroForm({ onCadastrar, loading = false }: Props) {
  const [formData, setFormData] = useState<IUsuario>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [erros, setErros] = useState<Partial<IUsuario>>({});

  const validarForm = (): boolean => {
    const novosErros: Partial<IUsuario> = {};

    if (!formData.nome) {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!formData.email) {
      novosErros.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = "Email inválido";
    }

    if (!formData.senha) {
      novosErros.senha = "Senha é obrigatória";
    } else if (formData.senha.length < 6) {
      novosErros.senha = "Senha deve ter pelo menos 6 caracteres";
    }

    if (!formData.confirmarSenha) {
      novosErros.confirmarSenha = "Confirme sua senha";
    } else if (formData.confirmarSenha !== formData.senha) {
      novosErros.confirmarSenha = "As senhas não coincidem";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarForm()) {
      onCadastrar(formData);
    }
  };

  const handleChange = (campo: keyof IUsuario, valor: string) => {
    setFormData((prev) => ({ ...prev, [campo]: valor }));
    if (erros[campo]) {
      setErros((prev) => ({ ...prev, [campo]: undefined }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#3f6b0d] rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-[#3f6b0d] font-[Poppins]">
          Criar Conta
        </CardTitle>
        <p className="text-gray-600 text-sm">
          Cadastre-se para começar a denunciar queimadas
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]"
            >
              Nome
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] outline-none font-[Poppins] ${
                  erros.nome ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Seu nome"
                disabled={loading}
              />
            </div>
            {erros.nome && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">
                {erros.nome}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] outline-none font-[Poppins] ${
                  erros.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="seu@email.com"
                disabled={loading}
              />
            </div>
            {erros.email && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">
                {erros.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]"
            >
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                value={formData.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] outline-none font-[Poppins] ${
                  erros.senha ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                disabled={loading}
              >
                {mostrarSenha ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {erros.senha && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">
                {erros.senha}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmarSenha"
              className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]"
            >
              Confirmar Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="confirmarSenha"
                type={mostrarConfirmarSenha ? "text" : "password"}
                value={formData.confirmarSenha}
                onChange={(e) => handleChange("confirmarSenha", e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] outline-none font-[Poppins] ${
                  erros.confirmarSenha ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                disabled={loading}
              >
                {mostrarConfirmarSenha ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {erros.confirmarSenha && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">
                {erros.confirmarSenha}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3f6b0d] hover:bg-[#2d4f08] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 font-[Poppins] cursor-pointer"
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
