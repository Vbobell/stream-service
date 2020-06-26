import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginClient } from './client/login.client';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginClient, LoginService],
})
export class LoginModule {}
