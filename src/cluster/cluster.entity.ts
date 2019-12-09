import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { PlantEntity } from '../plant/plant.entity';
import { KpiEntity } from '../kpi/kpi.entity';
import { RoleEntity } from '../roles/roles.entity';

@Entity('clusters')
export class ClusterEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar',unique:true})
    clusterName :string;

    @OneToMany(type=>PlantEntity,plant=>plant.cluster)
    plants:PlantEntity[]

    @OneToMany(type=>KpiEntity,kpi=>kpi.cluster)
    kpis:KpiEntity[]

    @OneToMany(type=>RoleEntity,role=>role.cluster)
    roles:RoleEntity[]
}