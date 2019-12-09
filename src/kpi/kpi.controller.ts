import { Controller, Get, Post, UsePipes, HttpCode, Body } from '@nestjs/common';
import { KpiService } from './kpi.service';
import { ValidationPipe } from '../_shared/validation.pipe';
import { KpiDto } from './kpi.dto';

@Controller('api/kpis')
export class KpiController {
    constructor(private kpiService:KpiService){}

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    createKpi(@Body() data:KpiDto){
        return  this.kpiService.createKpi(data)
    }
    @Post('update')
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    updateKpi(@Body() data:KpiDto){
        return  this.kpiService.updateKpi(data)
    }
}
