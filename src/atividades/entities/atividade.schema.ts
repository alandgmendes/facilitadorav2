import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Document, Model } from 'mongoose';
@Schema({ versionKey: false })
export class Atividade extends AbstractDocument {
  @Prop()
  cronogramaId: string;

  @Prop()
  atividade: string;

  @Prop()
  descricaoAtividade: string;

  @Prop()
  periodoInicial: string;

  @Prop()
  periodoFinal: string;

  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const AtividadeSchema = SchemaFactory.createForClass(Atividade);
export const AtividadeModel = Model<Atividade & Document>;
