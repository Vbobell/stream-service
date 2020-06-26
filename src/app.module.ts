import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';
import { KeyModule } from './key/key.module';

@Module({
  imports: [ChatModule, LoginModule, KeyModule],
})
export class AppModule {}
