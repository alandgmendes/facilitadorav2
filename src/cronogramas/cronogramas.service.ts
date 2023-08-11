import { Injectable } from '@nestjs/common';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
import { CronogramaRepository } from './cronogramas.repository';
import { Cronograma } from './entities/cronograma.schema';

@Injectable()
export class CronogramasService {
  constructor(public readonly cronogramarepository: CronogramaRepository) {}
  create(createCronogramaDto: CreateCronogramaDto) {
    return this.cronogramarepository.create(createCronogramaDto);
  }

  findAll() {
    return `This action returns all cronogramas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cronograma`;
  }

  update(id: number, updateCronogramaDto: UpdateCronogramaDto) {
    return `This action updates a #${id} cronograma`;
  }

  remove(id: number) {
    return `This action removes a #${id} cronograma`;
  }

  findByProjetId(projectId: string): Promise<Cronograma> {
    return this.findByProjetId(projectId);
  }
}
