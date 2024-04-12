import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}
  create(createCartItemDto: CreateCartItemDto, userId: number) {
    return this.prisma.cartItem.create({
      data: { ...createCartItemDto, userId },
    });
  }

  findAll(userId: number) {
    return this.prisma.cartItem.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.cartItem.findUnique({ where: { id, userId } });
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto, userId: number) {
    return this.prisma.cartItem.update({
      where: { id, userId },
      data: updateCartItemDto,
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.cartItem.delete({ where: { id, userId } });
  }
}
