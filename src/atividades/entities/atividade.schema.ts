import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Schema({ versionKey: false })
export class Atividade extends AbstractDocument {
  @Prop({ type: ObjectId })
  cronogramaId: TObjectId;

  @Prop()
  atividade: string;

  @Prop()
  descricaoAtividade: string;

  @Prop()
  periodo: string;

  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const AtividadeSchema = SchemaFactory.createForClass(Atividade);
export const AtividadeModel = Model<Atividade & Document>;
