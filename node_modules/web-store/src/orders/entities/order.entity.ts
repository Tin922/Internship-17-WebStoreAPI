import { ApiProperty } from '@nestjs/swagger';
import { Orders } from '@prisma/client';

export class OrdersEntity implements Orders {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
