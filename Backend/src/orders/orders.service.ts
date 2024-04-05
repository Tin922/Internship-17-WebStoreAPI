import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(userId: number) {
    return this.prisma.orders.create({ data: { userId } });
  }

  findAll(userId: number) {
    return this.prisma.orders.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.orders.findUnique({ where: { id, userId } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.orders.update({ where: { id }, data: updateOrderDto });
  }

  remove(id: number) {
    return this.prisma.orders.delete({ where: { id } });
  }
}
