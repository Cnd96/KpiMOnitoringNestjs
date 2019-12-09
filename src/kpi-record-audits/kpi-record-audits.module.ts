import { Module } from '@nestjs/common';
import { KpiRecordAuditsService } from './kpi-record-audits.service';
import { KpiRecordAuditsController } from './kpi-record-audits.controller';

@Module({
  providers: [KpiRecordAuditsService],
  controllers: [KpiRecordAuditsController]
})
export class KpiRecordAuditsModule {}
