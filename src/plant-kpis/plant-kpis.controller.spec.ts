import { Test, TestingModule } from '@nestjs/testing';
import { PlantKpisController } from './plant-kpis.controller';

describe('PlantKpis Controller', () => {
  let controller: PlantKpisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantKpisController],
    }).compile();

    controller = module.get<PlantKpisController>(PlantKpisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
