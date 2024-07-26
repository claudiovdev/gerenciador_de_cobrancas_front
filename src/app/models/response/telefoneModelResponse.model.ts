// telefone.model.ts
export interface TelefoneModelResponse {
  telefoneId: number;
  ddd: string;
  numero: string;
  titular: string;
  tipoTelefone: string; // Pode ser um enum se for uma string ou um tipo específico
  dataCriacao: string; // Usamos string para representar LocalDateTime
  dataAtualizacao: string; // Usamos string para representar LocalDateTime
}
