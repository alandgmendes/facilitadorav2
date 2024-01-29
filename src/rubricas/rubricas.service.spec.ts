import { Test, TestingModule } from '@nestjs/testing';
import { RubricasService } from './rubricas.service';

describe('RubricasService', () => {
  let service: RubricasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RubricasService],
    }).compile();

    service = module.get<RubricasService>(RubricasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
