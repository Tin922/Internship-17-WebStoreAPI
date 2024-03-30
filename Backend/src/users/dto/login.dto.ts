import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  userName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
