import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [ChatModule, LoginModule],
})
export class AppModule {}
