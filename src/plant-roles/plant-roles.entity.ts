import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { RoleEntity } from '../roles/roles.entity';
import { PlantEntity } from '../plant/plant.entity';

@Entity('plantroles')
export class PlantRolesEntity{
    @Column({type:'boolean'})
    freeze :boolean;
    
    @PrimaryColumn()
    roleId: number;

    @PrimaryColumn()
    plantId: number;

    @ManyToOne(type => RoleEntity, role => role.plantRoles)
    role: RoleEntity;

    @ManyToOne(type => PlantEntity, plant => plant.plantRoles)
    plant: PlantEntity;
}