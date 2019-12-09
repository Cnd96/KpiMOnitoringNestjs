import { Module } from '@nestjs/common';
import { PlantKpisController } from './plant-kpis.controller';
import { PlantKpisService } from './plant-kpis.service';
import { KpiEntity } from '../kpi/kpi.entity';
import { RoleEntity } from '../roles/roles.entity';
import { PlantEntity } from '../plant/plant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([PlantEntity,RoleEntity,KpiEntity])],
  controllers: [PlantKpisController],
  providers: [PlantKpisService]
})
export class PlantKpisModule {}
