import { TelefoneModelResponse } from "./telefoneModelResponse.model";


export interface UsuarioModelResponse {
  id: number;
  nome: string;
  telefoneModelResponse: TelefoneModelResponse[];
  dataCriacao: string;
  dataAtualizacao: string;
}
