import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeyClient } from './client/key.client';

@Injectable()
export class KeyService {
  constructor(private readonly client: KeyClient) {}

  validToken(token: string): Observable<boolean> {
    return this.client.checkToken(token).pipe(map(hasValid => hasValid));
  }
}
