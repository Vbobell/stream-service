import { Test, TestingModule } from '@nestjs/testing';
import { KeyClient } from './client/key.client';
import { KeyService } from './key.service';

describe('KeyService', () => {
  let service: KeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyClient, KeyService],
    }).compile();

    service = module.get<KeyService>(KeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('check client valid key', done => {
    service.validToken('jhon@jhon.com&123456').subscribe(valid => {
      expect(valid).toEqual(true);
      done();
    });
  });

  test('check client not valid key', done => {
    service.validToken('jhon@jhon&123').subscribe(valid => {
      expect(valid).toEqual(false);
      done();
    });
  });
});
