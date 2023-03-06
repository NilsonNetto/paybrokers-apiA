import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  valor: number;

  @Prop()
  descrição: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
