import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { KeyService } from '../key/key.service';

@Injectable()
export class AuthWs implements CanActivate {
  constructor(@Inject('KeyService') private readonly keyService: KeyService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToWs().getData();
    return request.token ? this.keyService.validToken(request.token) : false;
  }
}
