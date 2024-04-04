import { Injectable } from '@nestjs/common';
import { CreateWishListItemDto } from './dto/create-wish-list-item.dto';
import { UpdateWishListItemDto } from './dto/update-wish-list-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishListItemsService {
  constructor(private prisma: PrismaService) {}
  create(userId: number, createWishListItemDto: CreateWishListItemDto) {
    return this.prisma.wishListItem.create({
      data: { ...createWishListItemDto, userId },
    });
  }

  findAll(userId: number) {
    return this.prisma.wishListItem.findMany({ where: { userId } });
  }

  findOne(productId: number, userId: number) {
    return this.prisma.wishListItem.findUnique({
      where: { id: productId, userId },
    });
  }

  update(id: number, updateWishListItemDto: UpdateWishListItemDto) {
    return this.prisma.wishListItem.update({
      where: { id },
      data: updateWishListItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.wishListItem.delete({ where: { id } });
  }
}
