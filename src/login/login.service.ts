import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginClient } from './client/login.client';
import { User } from './client/login';

@Injectable()
export class LoginService {
  constructor(private readonly client: LoginClient) {}

  login(user: User): Observable<string> {
    return this.client.login(user).pipe(map(token => token));
  }
}
