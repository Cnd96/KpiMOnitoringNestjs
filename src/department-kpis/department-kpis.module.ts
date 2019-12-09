import { Module } from '@nestjs/common';
import { DepartmentKpisController } from './department-kpis.controller';
import { DepartmentKpisService } from './department-kpis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from '../departments/departments.entity';
import { KpiEntity } from '../kpi/kpi.entity';
import { DepartmentKpisEntity } from './department-kpis.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentEntity,KpiEntity,DepartmentKpisEntity])],
  controllers: [DepartmentKpisController],
  providers: [DepartmentKpisService]
})
export class DepartmentKpisModule {}
