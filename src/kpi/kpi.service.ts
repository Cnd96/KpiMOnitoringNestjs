import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KpiEntity } from './kpi.entity';
import { Repository } from 'typeorm';
import { KpiDto } from './kpi.dto';

@Injectable()
export class KpiService {
    constructor(
        @InjectRepository(KpiEntity) 
        private kpiRepository:Repository<KpiEntity>,
    ){}

    async createKpi(data:KpiDto){
        const {kpiName,clusterId}=data
        const matchingClusterKpi=await this.findMatchingKpiNameInClusterKpi(kpiName,clusterId);
        if(matchingClusterKpi){
            throw new HttpException("Kpi name exist",HttpStatus.BAD_REQUEST)
        }
        const kpiCreated = await this.kpiRepository.create({...data});
        await this.kpiRepository.save(kpiCreated);
        const clusterKpis=await this.getClusterKpis(clusterId)
        return clusterKpis
    }

    async updateKpi(data:Partial<KpiDto>){
        const {kpiName,clusterId,kpiId}=data
        const matchingClusterKpi=await this.findMatchingKpiNameInClusterKpi(kpiName,clusterId);
        if(!matchingClusterKpi||matchingClusterKpi.id==kpiId){
            delete data.kpiId
            await this.kpiRepository.update({id:kpiId},data)
            const clusterKpis=await this.getClusterKpis(clusterId)
            return clusterKpis
        }
        else{
            throw new HttpException("Kpi name exist",HttpStatus.BAD_REQUEST)
        }
    }

    async getClusterKpis(clusterId){
        const kpis = await this.kpiRepository.find({where:{clusterId}, relations:['category','measuringUnit']});
        return kpis
    }

    private async findMatchingKpiNameInClusterKpi(kpiName,clusterId){
        const clusterKpi=await this.kpiRepository.findOne({where:{kpiName:kpiName,clusterId:clusterId}})
        return clusterKpi
    }
}
