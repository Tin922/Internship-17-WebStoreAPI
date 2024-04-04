import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}

  create(createRatingDto: CreateRatingDto) {
    return this.prisma.rating.create({ data: createRatingDto });
  }

  findAll(userId: number) {
    return this.prisma.rating.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.rating.findUnique({ where: { id, userId } });
  }

  update(id: number, updateRatingDto: UpdateRatingDto, userId: number) {
    return this.prisma.rating.update({
      where: { id, userId },
      data: updateRatingDto,
    });
  }

  remove(id: number) {
    return this.prisma.rating.delete({ where: { id } });
  }
}
