import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetoRepository } from './projetos.repository';
import mongoose from 'mongoose';
import { CronogramaRepository } from 'src/cronogramas/cronogramas.repository';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class ProjetosService {
  constructor(
    public readonly projetoRepository: ProjetoRepository,
    public readonly cronogramaRepository: CronogramaRepository,
  ) {}

  create(createProjetoDto: CreateProjetoDto) {
    return this.projetoRepository.create(createProjetoDto);
  }

  findAll() {
    return this.projetoRepository.find({});
  }

  findOne(_id: string) {
    return this.projetoRepository.findOne({ _id });
  }

  async findProjectByUserId(userId: string) {
    const data = await this.projetoRepository.find({ userId });
    return { projetos: data };
  }

  update(id: number, updateProjetoDto: UpdateProjetoDto) {
    return `This action updates a #${id} projeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} projeto`;
  }
}
