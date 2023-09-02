import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Cronograma } from './entities/cronograma.schema';

@Injectable()
export class CronogramaRepository extends AbstractRepository<Cronograma> {
  protected readonly logger = new Logger(CronogramaRepository.name);

  constructor(
    @InjectModel(Cronograma.name) cronogramaModel: Model<Cronograma>,
    @InjectConnection() connection: Connection,
  ) {
    super(cronogramaModel, connection);
  }
  async findCronogramaByProjectId(projetoId: string): Promise<Cronograma> {
    try {
      const cronograma = await this.findOne({ projetoId: projetoId });
      return cronograma;
    } catch (error) {
      throw error;
    }
  }
}
