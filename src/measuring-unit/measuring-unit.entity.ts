import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { KpiEntity } from '../kpi/kpi.entity';

@Entity('measuringUnits')
export class MeasuringUnitEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar',unique:true})
    unitName :string;

    @Column({type:'varchar'})
    unitSymbol :string;

    @OneToMany(type=>KpiEntity,kpi=>kpi.measuringUnit)
    kpis:KpiEntity[]
}