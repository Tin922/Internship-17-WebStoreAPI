import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
export class ProductEntity implements Product {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  category: string;
  @ApiProperty({ required: false })
  description: string;
  @ApiProperty({ required: false })
  image: string;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
