import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
