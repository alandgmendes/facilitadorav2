import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosRepository } from './enderecos.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Endereco, EnderecoSchema } from './entities/endereco.schema';
import { EnderecosController } from './enderecos.controller';

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
    MongooseModule.forFeature([{ name: 'Endereco', schema: EnderecoSchema }]),
  ],
  providers: [EnderecosService, EnderecosRepository],
  controllers: [EnderecosController],
  exports: [EnderecosService],
})
export class EnderecosModule {}
