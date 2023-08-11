import { Test, TestingModule } from '@nestjs/testing';
import { CronogramasService } from './cronogramas.service';

describe('CronogramasService', () => {
  let service: CronogramasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronogramasService],
    }).compile();

    service = module.get<CronogramasService>(CronogramasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
