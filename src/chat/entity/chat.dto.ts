import { Token } from '../../key/entity/token.dto';

export class Message extends Token {
  user: string;
  message: string;
}
