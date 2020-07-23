import { Test, TestingModule } from '@nestjs/testing';
import { LoginClient } from './client/login.client';
import { LoginService } from './login.service';
import { User } from './dto/login.dto';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginClient, LoginService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('check client valid login', done => {
    const user: User = {
      email: 'jhon@jhon.com',
      password: '123456',
    };

    service.login(user).subscribe(text => {
      expect(text).toEqual('jhon@jhon.com&123456');
      done();
    });
  });

  test('check client not valid login', done => {
    const user: User = { email: 'jhon@jhon', password: '123' };

    service.login(user).subscribe(text => {
      expect(text).toEqual('');
      done();
    });
  });
});
