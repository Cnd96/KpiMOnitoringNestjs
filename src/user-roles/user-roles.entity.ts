import { Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { UsersEntity } from '../users/users.entity';
import { RoleEntity } from '../roles/roles.entity';

@Entity('userroles')
export class UserRolesEntity{
    @PrimaryColumn()
    roleId: number;

    @PrimaryColumn()
    userId: number;

    @ManyToOne(type => RoleEntity, role => role.userRoles)
    role: RoleEntity;

    @ManyToOne(type => UsersEntity, user => user.userRoles)
    user: UsersEntity;
}