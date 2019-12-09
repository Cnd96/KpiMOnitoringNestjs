import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { RoleEntity } from '../roles/roles.entity';
import { PlantEntity } from '../plant/plant.entity';
import { KpiEntity } from '../kpi/kpi.entity';

@Entity('plantkpis')
export class PlantKpiEntity{
    @Column()
    priorityLevel :number;
    
    @Column()
    roleId:number;

    @PrimaryColumn()
    kpiId: number;

    @PrimaryColumn()
    plantId: number;

    @ManyToOne(type => RoleEntity, role => role.plantKpis)
    role: RoleEntity;

    @ManyToOne(type => PlantEntity, plant => plant.plantKpis)
    plant: PlantEntity;

    @ManyToOne(type => KpiEntity, kpi => kpi.plantKpis)
    kpi: PlantEntity;

}