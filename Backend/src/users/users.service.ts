import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    await this.prisma.orders.deleteMany({
      where: { id },
    });
    await this.prisma.cartItem.deleteMany({
      where: { id },
    });
    await this.prisma.rating.deleteMany({
      where: { id },
    });
    await this.prisma.wishListItem.deleteMany({
      where: { id },
    });
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
