import { Module } from '@nestjs/common';
import { KpiController } from './kpi.controller';
import { KpiService } from './kpi.service';
import { ClusterEntity } from '../cluster/cluster.entity';
import { CategoryEntity } from '../category/category.entity';
import { MeasuringUnitEntity } from '../measuring-unit/measuring-unit.entity';
import { KpiEntity } from './kpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentKpisEntity } from '../department-kpis/department-kpis.entity';
import { ClusterModule } from '../cluster/cluster.module';
import { CategoryModule } from '../category/category.module';
import { MeasuringUnitModule } from '../measuring-unit/measuring-unit.module';

@Module({
  imports:[ClusterModule,CategoryModule,MeasuringUnitModule, TypeOrmModule.forFeature([KpiEntity,MeasuringUnitEntity,
  CategoryEntity,DepartmentKpisEntity,ClusterEntity])],
  controllers: [KpiController],
  providers: [KpiService]
})
export class KpiModule {}
