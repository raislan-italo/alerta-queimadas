import http from "@/api";
import { ILoginForm } from "@/interfaces/IUsuarios";
import axios from "axios";

export const fazerLogin = async (dados: ILoginForm) => {
  try {
    const resposta = await http.post("login", dados);
    console.log(resposta);
    return resposta;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na requisição de login:", error.response);
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
};
