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

@WebSocketGateway()
export class ChatGateway {
  messages: string[] = [];
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send-message')
  sendMessage(@MessageBody() data: string): Observable<WsResponse<string[]>> {
    this.messages.push(data);
    this.server.emit('send-message', { data: this.messages });

    return from(this.messages).pipe(
      map(() => ({ event: 'send-message', data: this.messages })),
    );
  }
}
