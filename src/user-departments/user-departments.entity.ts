import { Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { UsersEntity } from '../users/users.entity';
import { DepartmentEntity } from '../departments/departments.entity';

@Entity('userDepartments')
export class UserDepartmentsEntity{
    @PrimaryColumn()
    departmentId: number;

    @PrimaryColumn()
    userId: number;

    @ManyToOne(type => DepartmentEntity, department => department.userDepartments)
    department: DepartmentEntity;

    @ManyToOne(type => UsersEntity, user => user.userDepartments)
    user: UsersEntity;
}