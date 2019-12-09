import { Test, TestingModule } from '@nestjs/testing';
import { DailyKpiRecordsController } from './daily-kpi-records.controller';

describe('DailyKpiRecords Controller', () => {
  let controller: DailyKpiRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyKpiRecordsController],
    }).compile();

    controller = module.get<DailyKpiRecordsController>(DailyKpiRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
