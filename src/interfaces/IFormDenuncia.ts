export default interface IFormDenuncia {
  estado: string;
  cidade: string;
  local: string;
  dataHora: string;
  descricao: string;
  fotos: File[];
  anonimo: boolean;
  nome: string;
  email: string;
}