
export interface UsuarioModelRequest{
  nome: string;
  telefone: {
    ddd: string;
    numero: string;
    titular: string;
    tipoTelefone: string;
  }[];
}
