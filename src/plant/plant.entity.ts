import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { ClusterEntity } from '../cluster/cluster.entity';
import { PlantRolesEntity } from '../plant-roles/plant-roles.entity';
import { PlantKpiEntity } from '../plant-kpis/plant-kpis.entity';
import { DepartmentEntity } from '../departments/departments.entity';
import { UsersEntity } from '../users/users.entity';

@Entity('plants')
export class PlantEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar',unique:true})
    plantName :string;
    
    @Column('varchar')
    location :string;

    @Column('varchar')
    kpiRecordingMethod :string;

    @OneToMany(type=>DepartmentEntity,department=>department.plant)
    departments:DepartmentEntity[]

    @OneToMany(type=>UsersEntity,user=>user.plant)
    users:UsersEntity[]

    @ManyToOne(type=>ClusterEntity,cluster=>cluster.plants)
    cluster:ClusterEntity

    @OneToMany((type) => PlantRolesEntity, roles => roles.plant)
    plantRoles: PlantRolesEntity[];

    @OneToMany((type) => PlantKpiEntity, planKpis => planKpis.plant)
    plantKpis: PlantKpiEntity[];
}