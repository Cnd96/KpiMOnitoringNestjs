import { Controller, Post, UsePipes, HttpCode, Body } from '@nestjs/common';
import { PlantService } from './plant.service';
import { ValidationPipe } from '../_shared/validation.pipe';
import { PlantDto } from './plant.dto';

@Controller('api/plants')
export class PlantController {
    constructor(private plantService:PlantService){}

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    createKpi(@Body() data:PlantDto){
        return data
        // return  this.kpiService.createKpi(data)
    }
}
