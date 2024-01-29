import { Test, TestingModule } from '@nestjs/testing';
import { RubricasController } from './rubricas.controller';
import { RubricasService } from './rubricas.service';

describe('RubricasController', () => {
  let controller: RubricasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RubricasController],
      providers: [RubricasService],
    }).compile();

    controller = module.get<RubricasController>(RubricasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
