import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Document, Model } from 'mongoose';

@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  email: string;

  @Prop()
  senha: string;

  @Prop()
  role_ids: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserModel = Model<User & Document>;
