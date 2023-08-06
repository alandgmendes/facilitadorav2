import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('endereco')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post('/register')
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.createNew(createEnderecoDto);
  }

  @Get()
  findAll() {
    return this.enderecosService.findAll();
  }

  @Get(':cep')
  findByCep(@Param('cep') cep: string) {
    return this.enderecosService.findCepData(cep);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto,
  ) {
    return this.enderecosService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
}
