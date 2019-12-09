import { Module } from '@nestjs/common';
import { PlantRolesController } from './plant-roles.controller';
import { PlantRolesService } from './plant-roles.service';
import { RoleEntity } from '../roles/roles.entity';
import { PlantEntity } from '../plant/plant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([PlantEntity,RoleEntity])],
  controllers: [PlantRolesController],
  providers: [PlantRolesService]
})
export class PlantRolesModule {}
