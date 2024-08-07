
export interface UsuarioModelRequest{
  nome: string;
  cep: string;
  numero: string
  telefones: {
    ddd: string;
    numero: string;
    titular: string;
    tipoTelefone: string;
  }[];
}
