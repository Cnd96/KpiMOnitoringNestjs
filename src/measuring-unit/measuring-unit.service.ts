import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeasuringUnitEntity } from './measuring-unit.entity';
import { MeasuringUnitDto } from './measuring-unit.dto';

@Injectable()
export class MeasuringUnitService {
    constructor(
        @InjectRepository(MeasuringUnitEntity) 
        private measuringUnitRepository:Repository<MeasuringUnitEntity>,
    ){}

    async getMeasuringUnits(){
        const measuringUnits= await this.measuringUnitRepository.find();
        return measuringUnits;
    }
    async getMeasuringUnit(id :number){
        const measuringUnit= await this.measuringUnitRepository.findOne({where:{id}});
        id=null;
        return measuringUnit;
    }

    async createMeasuringUnit(data:MeasuringUnitDto){
        let measuringUnitCreated = await this.measuringUnitRepository.create(data);
        await this.measuringUnitRepository.save(measuringUnitCreated);
        const measuringUnits= await this.measuringUnitRepository.find();
        return measuringUnits
    }
}
