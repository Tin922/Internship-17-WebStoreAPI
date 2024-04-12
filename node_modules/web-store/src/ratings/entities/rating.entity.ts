import { ApiProperty } from '@nestjs/swagger';
import { Rating } from '@prisma/client';
export class RatingEntity implements Rating {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  rating: number;
  @ApiProperty()
  productId: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
