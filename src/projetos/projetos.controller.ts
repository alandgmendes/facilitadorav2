import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { CronogramasService } from 'src/cronogramas/cronogramas.service';
import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;

@Controller('projeto')
export class ProjetosController {
  constructor(
    private readonly projetosService: ProjetosService,
    private readonly cronogramasService: CronogramasService,
  ) {}

  @Post('/register')
  async create(@Body() createProjetoDto: CreateProjetoDto) {
    const projeto = await this.projetosService.create(createProjetoDto);
    const now = new Date();
    const data = {
      cronograma: {},
      projeto: {},
    };
    console.log(projeto);
    if (projeto._id) {
      console.log('projeto criado criando cronograma');
      const cronogramaProj = {
        projetoId: projeto._id.toString(),
        criadoEm: now,
        modificadoEm: now,
        acessadoEm: now,
      };
      const cronogramaSaved = await this.cronogramasService.create(
        cronogramaProj,
      );
      data.cronograma = cronogramaSaved;
      data.projeto = projeto;
      console.log(data);
      return data;
    }
  }

  @Get()
  findAll() {
    return this.projetosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const project = await this.projetosService.findOne(id);
    const cronograma = await this.cronogramasService.findByProjectId(id);
    const data = {
      project,
      cronograma,
    };
    return data;
  }

  @Get('/user/:userid')
  findByUserId(@Param('userid') userid: string) {
    return this.projetosService.findProjectByUserId(userid);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetosService.update(+id, updateProjetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetosService.remove(+id);
  }
}
