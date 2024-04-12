import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsNumber()
  productId: number;
}
