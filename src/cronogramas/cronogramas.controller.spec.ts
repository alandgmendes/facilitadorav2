import { Test, TestingModule } from '@nestjs/testing';
import { CronogramasController } from './cronogramas.controller';
import { CronogramasService } from './cronogramas.service';

describe('CronogramasController', () => {
  let controller: CronogramasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CronogramasController],
      providers: [CronogramasService],
    }).compile();

    controller = module.get<CronogramasController>(CronogramasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
