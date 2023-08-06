import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Projeto } from './entities/projeto.entity';
import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Injectable()
export class ProjetoRepository extends AbstractRepository<Projeto> {
  protected readonly logger = new Logger(ProjetoRepository.name);

  constructor(
    @InjectModel(Projeto.name) ProjetoModel: Model<Projeto>,
    @InjectConnection() connection: Connection,
  ) {
    super(ProjetoModel, connection);
  }

  async findProjectsByUserId(idUser: TObjectId): Promise<Projeto[]> {
    try {
      const projects = await this.find({ idUser });
      return projects;
    } catch (error) {
      throw error;
    }
  }
}
