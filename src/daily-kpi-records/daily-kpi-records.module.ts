import { Module } from '@nestjs/common';
import { DailyKpiRecordsService } from './daily-kpi-records.service';
import { DailyKpiRecordsController } from './daily-kpi-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from '../departments/departments.entity';
import { KpiEntity } from '../kpi/kpi.entity';
import { DailyKpiRecordsEntity } from './daily-kpi-records.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentEntity,KpiEntity,DailyKpiRecordsEntity])],
  providers: [DailyKpiRecordsService],
  controllers: [DailyKpiRecordsController]
})
export class DailyKpiRecordsModule {}
