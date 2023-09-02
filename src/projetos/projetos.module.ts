import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { ProjetosService } from './projetos.service';
import { ProjetosController } from './projetos.controller';
import { ProjetoSchema } from './entities/projeto.entity';
import { ProjetoRepository } from './projetos.repository';
import { CronogramasService } from 'src/cronogramas/cronogramas.service';
import { CronogramaRepository } from 'src/cronogramas/cronogramas.repository';
import { CronogramaSchema } from 'src/cronogramas/entities/cronograma.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: 'Projeto', schema: ProjetoSchema },
      { name: 'Cronograma', schema: CronogramaSchema },
    ]),
  ],
  controllers: [ProjetosController],
  providers: [
    ProjetosService,
    ProjetoRepository,
    CronogramasService,
    CronogramaRepository,
  ],
})
export class ProjetosModule {}
