import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Atividade } from './entities/atividade.schema';
import { AtividadesRepository } from './atividades.repository';
import { CronogramaRepository } from 'src/cronogramas/cronogramas.repository';
import { FilterQuery } from 'mongoose';

@Injectable()
export class AtividadesService {
  constructor(
    public readonly atividadesRepository: AtividadesRepository,
    public readonly cronogramaRepository: CronogramaRepository,
  ) {}
  create(createAtividadeDto: CreateAtividadeDto): Promise<Atividade> {
    return this.atividadesRepository.create(createAtividadeDto);
  }

  findOne(id: string): Promise<Atividade> {
    return this.atividadesRepository.findOne({ id });
  }

  async update(
    id: string,
    updateAtividadeDto: UpdateAtividadeDto,
  ): Promise<Atividade> {
    const filterQuery: FilterQuery<Atividade> = { _id: id };
    return this.atividadesRepository.upsert(filterQuery, updateAtividadeDto);
  }

  deleteAtividade(id: string): any {
    return this.atividadesRepository.remove({ id });
  }

  findAtividadesByCronogramaId(cronogramaId: string): Promise<Atividade[]> {
    return this.atividadesRepository.findAtividadesByCronogramaId(cronogramaId);
  }
}
