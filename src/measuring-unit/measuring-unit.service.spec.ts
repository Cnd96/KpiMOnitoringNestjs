import { Test, TestingModule } from '@nestjs/testing';
import { MeasuringUnitService } from './measuring-unit.service';

describe('MeasuringUnitService', () => {
  let service: MeasuringUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeasuringUnitService],
    }).compile();

    service = module.get<MeasuringUnitService>(MeasuringUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
