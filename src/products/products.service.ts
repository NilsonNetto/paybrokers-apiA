import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('MICROSERVICES_API_B') private readonly client: ClientProxy,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const productExists = await this.findOneByName(createProductDto.nome);

    if (productExists) {
      throw new Error('ProdutoExistente');
    }

    const createdProduct = new this.productModel(createProductDto);

    await createdProduct.save();

    this.client.emit('createProduct', createdProduct);

    return createdProduct;
  }

  async findOneByName(name: string) {
    return await this.productModel.findOne({ nome: name });
  }
}
