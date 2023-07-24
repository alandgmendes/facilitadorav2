import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { EnderecosRepository } from './enderecos.repository';
import { Endereco } from './entities/endereco.schema';

@Injectable()
export class EnderecosService {
  constructor(public readonly enderecoRepository: EnderecosRepository) {}
  createNew(createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
    return this.enderecoRepository.create(createEnderecoDto);
  }

  findAll() {
    return `This action returns all enderecos`;
  }

  findCepData(cep: string) {
    return this.enderecoRepository.findCepData(cep);
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereco`;
  }
}
