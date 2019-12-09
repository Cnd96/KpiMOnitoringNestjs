import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesEntity } from './user-roles.entity';
import { RoleEntity } from '../roles/roles.entity';
import { UsersEntity } from '../users/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserRolesEntity,RoleEntity,UsersEntity])],
  providers: [UserRolesService],
  controllers: [UserRolesController]
})
export class UserRolesModule {}
