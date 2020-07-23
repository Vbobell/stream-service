import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LoginModule } from '../src/login/login.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LoginModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('valid login', done => {
    return request(app.getHttpServer())
      .post('/login')
      .set('Accept', 'application/json')
      .send({ email: 'jhon@jhon.com', password: '123456' })
      .expect(200)
      .then(({ text }) => {
        expect(text).toEqual('jhon@jhon.com&123456');
        done();
      });
  });

  it('not valid login', done => {
    return request(app.getHttpServer())
      .post('/login')
      .set('Accept', 'application/json')
      .send({ email: 'jhon@jhon', password: '123' })
      .expect(200)
      .then(({ text }) => {
        expect(text).toEqual('');
        done();
      });
  });
});
