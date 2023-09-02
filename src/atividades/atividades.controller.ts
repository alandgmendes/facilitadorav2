import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';

@Controller('atividades')
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(@Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadesService.create(createAtividadeDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atividadesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtividadeDto: UpdateAtividadeDto,
  ) {
    return this.atividadesService.update(id, updateAtividadeDto);
  }

  @Get('/lista/:cronogramaId')
  findByCronograma(@Param('id') id: string) {
    return this.atividadesService.findAtividadesByCronogramaId(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atividadesService.deleteAtividade(id);
  }
}
