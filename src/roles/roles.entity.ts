import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { ClusterEntity } from '../cluster/cluster.entity';
import { PlantRolesEntity } from '../plant-roles/plant-roles.entity';
import { PlantKpiEntity } from '../plant-kpis/plant-kpis.entity';
import { UserRolesEntity } from '../user-roles/user-roles.entity';


@Entity('roles')
export class RoleEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar'})
    roleName :string;

    @OneToMany((type) => UserRolesEntity, userRoles => userRoles.role)
    userRoles: UserRolesEntity[];
    
    @ManyToOne(type=>ClusterEntity,cluster=>cluster.roles)
    cluster:ClusterEntity

    @OneToMany((type) => PlantRolesEntity, roles => roles.role)
    plantRoles: PlantRolesEntity[];

    @OneToMany((type) => PlantKpiEntity, planKpis => planKpis.plant)
    plantKpis: PlantKpiEntity[];
}