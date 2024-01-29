import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrcamentosService } from './orcamentos.service';
import { OrcamentosController } from './orcamentos.controller';
import { OrcamentoSchema } from './entities/orcamento.schema';
import { OrcamentoRepository } from './orcamentos.repository';
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
      { name: 'Orcamento', schema: OrcamentoSchema },
      { name: 'Projeto', schema: ProjetoSchema },
    ]),
  ],
  controllers: [OrcamentosController],
  providers: [
    OrcamentosService,
    OrcamentoRepository,
    ProjetosService,
    ProjetoRepository,
  ],
})
export class OrcamentosModule {}
