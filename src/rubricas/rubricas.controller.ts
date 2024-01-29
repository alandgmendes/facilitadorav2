import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RubricasService } from './rubricas.service';
import { CreateRubricaDto } from './dto/create-rubrica.dto';
import { UpdateRubricaDto } from './dto/update-rubrica.dto';

@Controller('rubricas')
export class RubricasController {
  constructor(private readonly rubricasService: RubricasService) {}

  @Post()
  create(@Body() createRubricaDto: CreateRubricaDto) {
    return this.rubricasService.create(createRubricaDto);
  }

  @Get()
  findAll() {
    return this.rubricasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rubricasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRubricaDto: UpdateRubricaDto) {
    return this.rubricasService.update(+id, updateRubricaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rubricasService.remove(+id);
  }
}
