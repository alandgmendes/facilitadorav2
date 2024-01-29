import { Module } from '@nestjs/common';
import { RubricasService } from './rubricas.service';
import { RubricasController } from './rubricas.controller';

@Module({
  controllers: [RubricasController],
  providers: [RubricasService]
})
export class RubricasModule {}
