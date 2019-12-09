import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesEntity } from '../user-roles/user-roles.entity';
import { UsersEntity } from './users.entity';
import { PlantEntity } from '../plant/plant.entity';
import { UserDepartmentsEntity } from '../user-departments/user-departments.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserRolesEntity,PlantEntity,UsersEntity,UserDepartmentsEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
