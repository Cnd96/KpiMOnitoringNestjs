import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClusterEntity } from './cluster.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClusterDto } from './cluster.dto';

@Injectable()
export class ClusterService {
    constructor(
        @InjectRepository(ClusterEntity) 
        private clusterRepository:Repository<ClusterEntity>,
    
    ){}

    async showAllClusters(){
        const clusters= await this.clusterRepository.find();
        return clusters;
    }
    async getCluster(id:number){
        const cluster= await this.clusterRepository.findOne({where:{id}});
        return cluster;
    }
   
    async getClusterWithKpis(id:number){
        const cluster= await this.clusterRepository.findOne({where:{id},relations:['kpis','kpis.category','kpis.measuringUnit']});
        return cluster.kpis;
    }

    async createCluster(data:ClusterDto){
        const {clusterName}=data
        const cluster=await this.clusterRepository.findOne({where:{clusterName}})
        if(cluster){
            throw new HttpException("Cluster exist",HttpStatus.BAD_REQUEST)
        }
        const clusterCreated = await this.clusterRepository.create(data);
        await this.clusterRepository.save(clusterCreated)
        return clusterCreated
    }
}
