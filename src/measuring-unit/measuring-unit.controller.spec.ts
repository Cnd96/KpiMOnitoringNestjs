import { Test, TestingModule } from '@nestjs/testing';
import { MeasuringUnitController } from './measuring-unit.controller';

describe('MeasuringUnit Controller', () => {
  let controller: MeasuringUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeasuringUnitController],
    }).compile();

    controller = module.get<MeasuringUnitController>(MeasuringUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
