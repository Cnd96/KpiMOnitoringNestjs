import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantEntity } from '../plant/plant.entity';
import { DepartmentEntity } from './departments.entity';
import { DepartmentKpisEntity } from '../department-kpis/department-kpis.entity';
import { UserDepartmentsEntity } from '../user-departments/user-departments.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentEntity,PlantEntity,DepartmentKpisEntity,UserDepartmentsEntity])],
  providers: [DepartmentsService],
  controllers: [DepartmentsController]
})
export class DepartmentsModule {}
