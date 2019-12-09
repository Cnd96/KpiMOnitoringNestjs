import { Controller, Get, Post, Body, UsePipes, HttpCode, Param } from '@nestjs/common';
import { ClusterService } from './cluster.service';
import { ClusterDto } from './cluster.dto';
import { ValidationPipe } from '../_shared/validation.pipe';

@Controller('api/clusters')
export class ClusterController {
    constructor(private clusterService:ClusterService){}
   
    @Get()
    @HttpCode(200)
    showAllClusters(){
       return this.clusterService.showAllClusters()
    }

    @Get('kpiList/:id')
    @HttpCode(200)
    getClusteKpis(@Param('id') id){
       return this.clusterService.getClusterWithKpis(id)
    }

    @Post('')
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    createUser(@Body() data:ClusterDto){
        return  this.clusterService.createCluster(data)
    }
}
