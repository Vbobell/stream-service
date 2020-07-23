import { Observable } from 'rxjs';
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './dto/login.dto';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor(readonly loginService: LoginService) {}

  @Post()
  @ApiTags('login')
  @ApiOkResponse({ description: 'Login', type: String })
  @HttpCode(200)
  login(@Body() user: User): Observable<string> {
    return this.loginService.login(user);
  }
}
