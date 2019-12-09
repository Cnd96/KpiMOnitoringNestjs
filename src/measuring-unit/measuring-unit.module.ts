import { Module } from '@nestjs/common';
import { MeasuringUnitController } from './measuring-unit.controller';
import { MeasuringUnitService } from './measuring-unit.service';
import { KpiEntity } from '../kpi/kpi.entity';
import { MeasuringUnitEntity } from './measuring-unit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MeasuringUnitEntity,KpiEntity])],
  controllers: [MeasuringUnitController],
  providers: [MeasuringUnitService],
  exports:[MeasuringUnitService]
})
export class MeasuringUnitModule {}
