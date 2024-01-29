import { Injectable } from '@nestjs/common';
import { CreateRubricaDto } from './dto/create-rubrica.dto';
import { UpdateRubricaDto } from './dto/update-rubrica.dto';

@Injectable()
export class RubricasService {
  create(createRubricaDto: CreateRubricaDto) {
    return 'This action adds a new rubrica';
  }

  findAll() {
    return `This action returns all rubricas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rubrica`;
  }

  update(id: number, updateRubricaDto: UpdateRubricaDto) {
    return `This action updates a #${id} rubrica`;
  }

  remove(id: number) {
    return `This action removes a #${id} rubrica`;
  }
}
