import { Test, TestingModule } from '@nestjs/testing';
import { PlantKpisService } from './plant-kpis.service';

describe('PlantKpisService', () => {
  let service: PlantKpisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantKpisService],
    }).compile();

    service = module.get<PlantKpisService>(PlantKpisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
