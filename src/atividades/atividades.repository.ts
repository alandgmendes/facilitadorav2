import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Atividade } from './entities/atividade.schema';

@Injectable()
export class AtividadesRepository extends AbstractRepository<Atividade> {
  protected readonly logger = new Logger(AtividadesRepository.name);

  constructor(
    @InjectModel(Atividade.name) atividadeModel: Model<Atividade>,
    @InjectConnection() connection: Connection,
  ) {
    super(atividadeModel, connection);
  }
  async findAtividadesByCronogramaId(
    cronogramaId: string,
  ): Promise<Atividade[]> {
    try {
      const atividades = await this.find({ cronogramaId: cronogramaId });
      return atividades;
    } catch (error) {
      throw error;
    }
  }
}
