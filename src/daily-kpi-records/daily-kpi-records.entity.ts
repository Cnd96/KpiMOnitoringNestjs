import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, PrimaryColumn, Double } from 'typeorm'
import { KpiEntity } from '../kpi/kpi.entity';
import { DepartmentEntity } from '../departments/departments.entity';


@Entity('dailykpirecords')
export class DailyKpiRecordsEntity{
    @Column({type:'float'})
    score :number;

    @Column({type:'varchar'})
    comment :string;

    @PrimaryColumn({type:'timestamptz'})
    date:Date;

    @PrimaryColumn()
    kpiId: number;

    @PrimaryColumn()
    departmentId: number;

    @ManyToOne(type => KpiEntity, kpi => kpi.departmentKpis)
    kpi: KpiEntity;

    @ManyToOne(type => DepartmentEntity, plant => plant.departmentKpis)
    department: DepartmentEntity;
}