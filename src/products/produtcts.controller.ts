import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const createdProduct = await this.productsService.createProduct(
        createProductDto,
      );

      return createdProduct;
    } catch (error) {
      if (error.message === 'ProdutoExistente') {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'O produto já está cadastrado na base de dados',
          },
          HttpStatus.CONFLICT,
          {
            cause: error,
          },
        );
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
