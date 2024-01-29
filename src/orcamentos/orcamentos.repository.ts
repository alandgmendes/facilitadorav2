import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Orcamento } from './entities/orcamento.schema';

@Injectable()
export class OrcamentoRepository extends AbstractRepository<Orcamento> {
  protected readonly logger = new Logger(OrcamentoRepository.name);

  constructor(
    @InjectModel(Orcamento.name) orcamentoModel: Model<Orcamento>,
    @InjectConnection() connection: Connection,
  ) {
    super(orcamentoModel, connection);
  }

  async findOrcamentoByProjectId(projetoId: string): Promise<Orcamento> {
    try {
      const orcamento = await this.findOne({ projetoId: projetoId });
      return orcamento;
    } catch (error) {
      throw error;
    }
  }
}
