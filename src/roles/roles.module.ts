import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { PlantRolesEntity } from '../plant-roles/plant-roles.entity';
import { ClusterEntity } from '../cluster/cluster.entity';
import { RoleEntity } from './roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesEntity } from '../user-roles/user-roles.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RoleEntity,ClusterEntity,PlantRolesEntity,UserRolesEntity])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
