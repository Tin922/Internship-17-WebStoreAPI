import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty()
  rating: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  productId: number;
}
