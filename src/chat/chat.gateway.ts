import { UseGuards } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { AuthWs } from '../guards/auth-ws.guard';
import { Message } from './entity/chat.dto';

@UseGuards(AuthWs)
@WebSocketGateway()
export class ChatGateway {
  messages: Message[] = [];
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send-message')
  sendMessage(@MessageBody() data: Message): Observable<WsResponse<Message[]>> {
    this.messages.push(data);
    this.server.emit('send-message', { data: this.messages });

    return from(this.messages).pipe(
      map(() => ({ event: 'send-message', data: this.messages })),
    );
  }
}
