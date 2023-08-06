import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
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
  areaAtuacao: string;

  @Prop({ type: ObjectId })
  enderecoId: TObjectId;

  @Prop()
  criadoEm: Date;
}

export const PessoaSchema = SchemaFactory.createForClass(Pessoa);
export const PessoaModel = Model<Pessoa & Document>;
