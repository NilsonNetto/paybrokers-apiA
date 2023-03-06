import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('product')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    await this.productsService.createProduct(createProductDto);
  }
}
