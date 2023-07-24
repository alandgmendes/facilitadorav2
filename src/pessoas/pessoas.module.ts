import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasRepository } from './pessoas.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaSchema } from './entities/pessoa.schema';
import { PessoasController } from './pessoas.controller';

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
    MongooseModule.forFeature([{ name: 'Pessoa', schema: PessoaSchema }]),
  ],
  providers: [PessoasService, PessoasRepository],
  controllers: [PessoasController],
  exports: [PessoasService],
})
export class PessoasModule {}
