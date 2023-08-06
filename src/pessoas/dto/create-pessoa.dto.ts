export class CreatePessoaDto {
  cpf: string;
  criadoEm: Date;
  dataNascimento: Date;
  email: string;
  endereco: {
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    numero: string;
  };
  nome: string;
  telefone: string;
}
