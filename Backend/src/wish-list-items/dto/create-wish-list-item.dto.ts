import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateWishListItemDto {
  @ApiProperty()
  @IsNumber()
  productId: number;
}
