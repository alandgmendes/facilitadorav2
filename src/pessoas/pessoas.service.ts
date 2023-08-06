import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from './pessoas.repository';
import { EnderecosRepository } from '../enderecos/enderecos.repository';

@Injectable()
export class PessoasService {
  constructor(
    public readonly pessoaRepository: PessoasRepository,
    private readonly enderecoRepository: EnderecosRepository,
  ) {}
  async create(createPessoaDto: CreatePessoaDto) {
    const enderecoPessoa = createPessoaDto.endereco;
    const newEnderecoResult = await this.enderecoRepository.upsert(
      enderecoPessoa,
      enderecoPessoa,
    );
    console.log(newEnderecoResult);
    const pessoadata = {
      nome: createPessoaDto.nome,
      email: createPessoaDto.email,
      dataNascimento: createPessoaDto.dataNascimento,
      cpf: createPessoaDto.cpf,
      criadoEm: createPessoaDto.criadoEm,
    };
    const newPessoa = await this.pessoaRepository.upsert(
      pessoadata,
      pessoadata,
    );
    return { novaPessoa: newPessoa };
  }

  findPessoaByMail(email: string) {
    return this.pessoaRepository.findPessoaByEmail(email);
  }

  findAll() {
    return `This action returns all pessoas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return `This action updates a #${id} pessoa`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }

  findByCpf(cpf: string) {
    return this.pessoaRepository.findPessoaByCpf(cpf);
  }
}
