import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { PlantRolesEntity } from '../plant-roles/plant-roles.entity';
import { PlantEntity } from './plant.entity';
import { ClusterEntity } from '../cluster/cluster.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantKpiEntity } from '../plant-kpis/plant-kpis.entity';
import { DepartmentEntity } from '../departments/departments.entity';
import { UsersEntity } from '../users/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClusterEntity,PlantEntity,DepartmentEntity,PlantKpiEntity,
    UsersEntity,PlantRolesEntity
  ])],
  providers: [PlantService],
  controllers: [PlantController]
})
export class PlantModule {}
