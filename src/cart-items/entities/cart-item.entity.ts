import { ApiProperty } from '@nestjs/swagger';
import { CartItem } from '@prisma/client';
export class CartItemEntity implements CartItem {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  productId: number;
  @ApiProperty()
  ordersId: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
