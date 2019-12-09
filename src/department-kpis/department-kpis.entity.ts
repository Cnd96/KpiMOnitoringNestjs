import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, PrimaryColumn, Double } from 'typeorm'
import { KpiEntity } from '../kpi/kpi.entity';
import { DepartmentEntity } from '../departments/departments.entity';


@Entity('departmentkpis')
export class DepartmentKpisEntity{
    @Column({type:'float'})
    standardScore :number;

    @Column()
    active :boolean;

    @PrimaryColumn()
    month:number;

    @PrimaryColumn()
    year:number;

    @PrimaryColumn()
    kpiId: number;

    @PrimaryColumn()
    departmentId: number;

    @ManyToOne(type => KpiEntity, kpi => kpi.departmentKpis)
    kpi: KpiEntity;

    @ManyToOne(type => DepartmentEntity, plant => plant.departmentKpis)
    department: DepartmentEntity;
}