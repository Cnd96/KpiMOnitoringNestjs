import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { PlantEntity } from '../plant/plant.entity';
import { UserRolesEntity } from '../user-roles/user-roles.entity';
import { UserDepartmentsEntity } from '../user-departments/user-departments.entity';

@Entity('users')
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar',unique:true})
    userName :string;
    
    @Column()
    accessLevel :number;

    @ManyToOne(type=>PlantEntity,plant=>plant.users)
    plant:PlantEntity

    @OneToMany((type) => UserRolesEntity, userRoles => userRoles.user)
    userRoles: UserRolesEntity[];

    @OneToMany((type) => UserDepartmentsEntity, userDepartments => userDepartments.user)
    userDepartments: UserDepartmentsEntity[];
}