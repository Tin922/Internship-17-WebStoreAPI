import { ApiProperty } from '@nestjs/swagger';

export class CreateWishListItemDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  productId: number;
}
