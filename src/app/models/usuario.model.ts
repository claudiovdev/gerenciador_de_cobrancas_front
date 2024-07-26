import { Telefone } from "./telefone.model";

export interface Usuario{
  usuarioId: number;
  nome: string;
  telfones: Telefone[];
  dataCriacao: string;
  dataAtualizacao: string;
}
