import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {IForCat} from '../interface/cat.interface';


@Schema()
export class Cat {

  @Prop({
    type: String,
    required: true
  })
  login: string

  @Prop({
    type: Number
  })
  age: number
  
}

export const CatSchema = SchemaFactory.createForClass(Cat)

