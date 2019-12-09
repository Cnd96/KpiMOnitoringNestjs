import { Module } from '@nestjs/common';
import { UserDepartmentsService } from './user-departments.service';
import { UserDepartmentsController } from './user-departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDepartmentsEntity } from './user-departments.entity';
import { UsersEntity } from '../users/users.entity';
import { DepartmentEntity } from '../departments/departments.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserDepartmentsEntity,DepartmentEntity,UsersEntity])],
  providers: [UserDepartmentsService],
  controllers: [UserDepartmentsController]
})
export class UserDepartmentsModule {}
