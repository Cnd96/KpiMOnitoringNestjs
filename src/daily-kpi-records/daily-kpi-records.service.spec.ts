import { Test, TestingModule } from '@nestjs/testing';
import { DailyKpiRecordsService } from './daily-kpi-records.service';

describe('DailyKpiRecordsService', () => {
  let service: DailyKpiRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyKpiRecordsService],
    }).compile();

    service = module.get<DailyKpiRecordsService>(DailyKpiRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
