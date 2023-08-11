import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Schema({ versionKey: false })
export class Cronograma extends AbstractDocument {
  @Prop({ type: ObjectId })
  projetoId: string;

  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const CronogramaSchema = SchemaFactory.createForClass(Cronograma);
export const CronogramaModel = Model<Cronograma & Document>;
