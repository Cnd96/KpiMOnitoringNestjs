import { Test, TestingModule } from '@nestjs/testing';
import { KpiRecordAuditsController } from './kpi-record-audits.controller';

describe('KpiRecordAudits Controller', () => {
  let controller: KpiRecordAuditsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KpiRecordAuditsController],
    }).compile();

    controller = module.get<KpiRecordAuditsController>(KpiRecordAuditsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
