import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { ClusterEntity } from '../cluster/cluster.entity';
import { CategoryEntity } from '../category/category.entity';
import { MeasuringUnitEntity } from '../measuring-unit/measuring-unit.entity';
import { PlantKpiEntity } from '../plant-kpis/plant-kpis.entity';
import { DepartmentKpisEntity } from '../department-kpis/department-kpis.entity';

@Entity('kpis')
export class KpiEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar'})
    kpiName :string;
    
    @Column('varchar')
    description :string;

    @Column({type:'varchar',length:1})
    type :string;

    @Column()
    categoryId :number;

    @Column()
    measuringUnitId :number;

    @Column()
    clusterId :number;

    @ManyToOne(tye=>ClusterEntity,cluster=>cluster.kpis)
    cluster:ClusterEntity

    @ManyToOne(type=>CategoryEntity,category=>category.kpis)
    category:CategoryEntity

    @ManyToOne(type=>MeasuringUnitEntity,measuringUnit=>measuringUnit.kpis)
    measuringUnit:MeasuringUnitEntity

    @OneToMany((type) => PlantKpiEntity, planKpis => planKpis.plant)
    plantKpis: PlantKpiEntity[];

    @OneToMany((type) => DepartmentKpisEntity, departmentKpis => departmentKpis.kpi)
    departmentKpis: DepartmentKpisEntity[];
}