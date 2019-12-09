import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { PlantEntity } from '../plant/plant.entity';
import { DepartmentKpisEntity } from '../department-kpis/department-kpis.entity';
import { UserDepartmentsEntity } from '../user-departments/user-departments.entity';

@Entity('departments')
export class DepartmentEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar'})
    departmentName :string;

    @ManyToOne(type=>PlantEntity,plant=>plant.departments)
    plant:PlantEntity

    @OneToMany((type) => DepartmentKpisEntity, departmentKpis => departmentKpis.department)
    departmentKpis: DepartmentKpisEntity[];

    @OneToMany((type) => UserDepartmentsEntity, userDepartments => userDepartments.department)
    userDepartments: UserDepartmentsEntity[];
}