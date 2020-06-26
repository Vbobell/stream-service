import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import * as MOCK_USER from '../../users.json';

@Injectable()
export class KeyClient {
  checkToken(token: string): Observable<boolean> {
    return from(this.decriptToken(token));
  }

  private decriptToken(token: string): Promise<boolean> {
    const splitToken = token.split(/&/g);

    if (splitToken.length === 2) {
      const user = MOCK_USER.users.find(
        user => user.email === splitToken[0] && user.password === splitToken[1],
      );

      return new Promise(resolve => resolve(!!user));
    }

    return new Promise(resolve => resolve(false));
  }
}
