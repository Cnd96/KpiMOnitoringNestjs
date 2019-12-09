import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { KpiEntity } from '../kpi/kpi.entity';

@Entity('categories')
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    id :number;

    @Column({type:'varchar',unique:true})
    categoryName :string;

    @OneToMany(type=>KpiEntity,kpi=>kpi.category)
    kpis:KpiEntity[]
}