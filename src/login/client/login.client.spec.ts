import { Test, TestingModule } from '@nestjs/testing';
import { LoginClient } from './login.client';
import { User } from './login';

describe('Login Client', () => {
  let loginClient: LoginClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginClient],
    }).compile();

    loginClient = module.get<LoginClient>(LoginClient);
  });

  it('should be defined', () => {
    expect(loginClient).toBeDefined();
  });

  test('check client valid login', done => {
    const user: User = {
      email: 'jhon@jhon.com',
      password: '123456',
    };

    loginClient.login(user).subscribe(text => {
      expect(text).toEqual('jhon@jhon.com&123456');
      done();
    });
  });

  test('check client not valid login', done => {
    const user: User = { email: 'jhon@jhon', password: '123' };

    loginClient.login(user).subscribe(text => {
      expect(text).toEqual('');
      done();
    });
  });
});
