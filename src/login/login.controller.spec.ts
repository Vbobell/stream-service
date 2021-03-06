import { Test, TestingModule } from '@nestjs/testing';
import { LoginClient } from './client/login.client';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { User } from './dto/login.dto';

describe('Login Controller', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginClient, LoginService],
      controllers: [LoginController],
    }).compile();

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('check client valid login', done => {
    const user: User = {
      email: 'jhon@jhon.com',
      password: '123456',
    };

    controller.login(user).subscribe(text => {
      expect(text).toEqual('jhon@jhon.com&123456');
      done();
    });
  });

  test('check client not valid login', done => {
    const user: User = { email: 'jhon@jhon', password: '123' };

    controller.login(user).subscribe(text => {
      expect(text).toEqual('');
      done();
    });
  });
});
