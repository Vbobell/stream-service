import { Token } from 'src/key/entity/token.dto';

export class Message extends Token {
  user: string;
  message: string;
}
