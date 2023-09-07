import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CronogramasService } from './cronogramas.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';

@Controller('cronogramas')
export class CronogramasController {
  constructor(private readonly cronogramasService: CronogramasService) {}

  @Post()
  create(@Body() createCronogramaDto: CreateCronogramaDto) {
    return this.cronogramasService.create(createCronogramaDto);
  }

  @Get()
  findAll() {
    return this.cronogramasService.findAll();
  }

  @Get('/cronograma/:id')
  findOne(@Param('id') id: string) {
    return this.cronogramasService.findOne(+id);
  }

  @Get('/projeto/cronograma/:projectId')
  findCronogramaByProjectId(@Param('projectId') projectId: string) {
    return this.cronogramasService.findByProjectId(projectId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCronogramaDto: UpdateCronogramaDto,
  ) {
    return this.cronogramasService.update(+id, updateCronogramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronogramasService.remove(+id);
  }
}
