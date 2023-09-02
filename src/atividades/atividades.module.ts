import { Module } from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { AtividadesController } from './atividades.controller';
import { CronogramaRepository } from 'src/cronogramas/cronogramas.repository';
import { AtividadesRepository } from './atividades.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AtividadeSchema } from './entities/atividade.schema';
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
      { name: 'Cronograma', schema: CronogramaSchema },
      { name: 'Atividade', schema: AtividadeSchema },
    ]),
  ],
  controllers: [AtividadesController],
  providers: [AtividadesService, CronogramaRepository, AtividadesRepository],
})
export class AtividadesModule {}
