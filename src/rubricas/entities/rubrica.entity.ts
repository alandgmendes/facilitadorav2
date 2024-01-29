import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Schema({ versionKey: false })
export class Rubrica extends AbstractDocument {
  @Prop()
  projetoId: string;

  @Prop()
  descricao: string;

  @Prop()
  justificativa: string;

  @Prop()
  unidadeMedida: string;

  @Prop()
  tipoRubrica: string;

  @Prop()
  valorUnitario: string;

  @Prop()
  quantidade: string;

  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const RubricaSchema = SchemaFactory.createForClass(Rubrica);
export const RubricaModel = Model<Rubrica & Document>;
