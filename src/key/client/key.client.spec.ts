import { Test, TestingModule } from '@nestjs/testing';
import { KeyClient } from './key.client';

describe('Key client', () => {
  let keyClient: KeyClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyClient],
    }).compile();

    keyClient = module.get<KeyClient>(KeyClient);
  });

  it('should be defined', () => {
    expect(keyClient).toBeDefined();
  });

  test('check client valid key', done => {
    keyClient.checkToken('jhon@jhon.com&123456').subscribe(valid => {
      expect(valid).toEqual(true);
      done();
    });
  });

  test('check client not valid key', done => {
    keyClient.checkToken('jhon@jhon&123').subscribe(valid => {
      expect(valid).toEqual(false);
      done();
    });
  });
});
