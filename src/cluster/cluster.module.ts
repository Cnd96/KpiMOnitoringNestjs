import { Module } from '@nestjs/common';
import { ClusterController } from './cluster.controller';
import { RoleEntity } from '../roles/roles.entity';
import { KpiEntity } from '../kpi/kpi.entity';
import { PlantEntity } from '../plant/plant.entity';
import { ClusterEntity } from './cluster.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClusterService } from './cluster.service';

@Module({
  imports:[TypeOrmModule.forFeature([ClusterEntity,PlantEntity,KpiEntity,RoleEntity])],
  providers: [ClusterService],
  controllers: [ClusterController],
  exports:[ClusterService]
})
export class ClusterModule {}
