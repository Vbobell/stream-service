import { Injectable } from '@nestjs/common';
import * as MOCK_USER from '../../users.json';
import { User } from './login';
import { Observable, from } from 'rxjs';

@Injectable()
export class LoginClient {
  login(userRequest: User): Observable<string> {
    return from(this.checkUsers(userRequest));
  }

  private checkUsers(userRequest: User): Promise<string> {
    const user = MOCK_USER.users.find(
      user =>
        user.email === userRequest.email &&
        user.password === userRequest.password,
    );

    if (user) {
      return new Promise(resolve => resolve(`${user.email}&${user.password}`));
    }

    return new Promise(resolve => resolve(''));
  }
}
