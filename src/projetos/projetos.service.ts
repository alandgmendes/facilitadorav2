import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetoRepository } from './projetos.repository';
import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class ProjetosService {
  constructor(public readonly projetoRepository: ProjetoRepository) {}
  create(createProjetoDto: CreateProjetoDto) {
    return this.projetoRepository.upsert(createProjetoDto, createProjetoDto);
  }

  findAll() {
    return this.projetoRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} projeto`;
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
