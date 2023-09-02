import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Document, Model, SchemaTypes } from 'mongoose';
import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
@Schema({ versionKey: false })
export class Projeto extends AbstractDocument {
  @Prop()
  titulo?: string;

  @Prop()
  resumoProjeto?: string;

  @Prop()
  descricaoProjeto?: string;

  @Prop()
  justificativaProjeto?: string;

  @Prop()
  metasObjetivos?: string;

  @Prop()
  acessibilidade?: string;

  @Prop()
  democratizacaoAcesso?: string;

  @Prop()
  produtoCultural?: string;

  @Prop()
  planoDivulgacao?: string;

  @Prop()
  fontesPatrocinio?: string;

  @Prop()
  userId: string;
  
  @Prop()
  criadoEm: Date;

  @Prop()
  modificadoEm: Date;

  @Prop()
  acessadoEm: Date;
}

export const ProjetoSchema = SchemaFactory.createForClass(Projeto);
export const ProjetoModel = Model<Projeto & Document>;
