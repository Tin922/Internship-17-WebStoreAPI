import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    await this.prisma.rating.deleteMany({
      where: { productId: id },
    });
    await this.prisma.cartItem.deleteMany({
      where: { productId: id },
    });
    await this.prisma.wishListItem.deleteMany({
      where: { productId: id },
    });
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async findByName(name: string) {
    return this.prisma.product.findMany({
      where: {
        title: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }
}
