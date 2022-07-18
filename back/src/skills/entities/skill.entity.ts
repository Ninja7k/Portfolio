import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop()
  skillName: string;
  @Prop()
  experience: string;
  @Prop()
  description: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
