import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { KeyModule } from '../key/key.module';

@Module({
  providers: [ChatGateway],
  imports: [KeyModule],
})
export class ChatModule {}
