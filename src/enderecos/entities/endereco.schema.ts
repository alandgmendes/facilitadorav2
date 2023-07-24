import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Document, Model } from 'mongoose';

@Schema({ versionKey: false })
export class Endereco extends AbstractDocument {
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
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
export type EnderecoModel = Model<Endereco & Document>;
