export default interface IUsuario {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string
  avatar?: string;
  dataCriacao?: Date;
  ultimoLogin?: Date;
}

export interface ILoginForm {
  email: string;
  senha: string;
  lembrarMe?: boolean
}