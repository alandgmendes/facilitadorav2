import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Schema({ versionKey: false })
export class Orcamento extends AbstractDocument {
  @Prop()
  projetoId: string;

  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const OrcamentoSchema = SchemaFactory.createForClass(Orcamento);
export const OrcamentoModel = Model<Orcamento & Document>;
