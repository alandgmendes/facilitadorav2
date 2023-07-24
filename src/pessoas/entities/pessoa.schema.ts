import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Document, Model } from 'mongoose';

@Schema({ versionKey: false })
export class Pessoa extends AbstractDocument {
  @Prop()
  nome: string;

  @Prop()
  cpf: string;

  @Prop()
  telefone: string;

  @Prop()
  dataNascimento: Date;

  @Prop()
  email: string;

  @Prop()
  logradouro: string;

  @Prop()
  numero: string;

  @Prop()
  bairro: string;

  @Prop()
  cep: string;

  @Prop()
  cidade: string;

  @Prop()
  estado: string;

  @Prop()
  areaAtuacao: string;
}

export const PessoaSchema = SchemaFactory.createForClass(Pessoa);
export type PessoaModel = Model<Pessoa & Document>;
