import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
export class UserEntity implements User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  isAdmin: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
