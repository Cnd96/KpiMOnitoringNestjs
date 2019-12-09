import { Test, TestingModule } from '@nestjs/testing';
import { KpiRecordAuditsService } from './kpi-record-audits.service';

describe('KpiRecordAuditsService', () => {
  let service: KpiRecordAuditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KpiRecordAuditsService],
    }).compile();

    service = module.get<KpiRecordAuditsService>(KpiRecordAuditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
