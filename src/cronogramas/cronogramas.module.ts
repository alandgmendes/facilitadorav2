import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CronogramasService } from './cronogramas.service';
import { CronogramasController } from './cronogramas.controller';
import { CronogramaSchema } from './entities/cronograma.schema';
import { CronogramaRepository } from './cronogramas.repository';
import { ProjetoRepository } from 'src/projetos/projetos.repository';
import { ProjetosService } from 'src/projetos/projetos.service';
import { ProjetoSchema } from 'src/projetos/entities/projeto.entity';

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
      { name: 'Cronograma', schema: CronogramaSchema },
      { name: 'Projeto', schema: ProjetoSchema },
    ]),
  ],
  controllers: [CronogramasController],
  providers: [
    CronogramasService,
    CronogramaRepository,
    ProjetosService,
    ProjetoRepository,
  ],
})
export class CronogramasModule {}
