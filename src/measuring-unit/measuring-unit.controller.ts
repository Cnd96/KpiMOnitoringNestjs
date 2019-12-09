import { Controller, Get, Post, UsePipes, Body, HttpCode } from '@nestjs/common';
import { MeasuringUnitService } from './measuring-unit.service';
import { ValidationPipe } from '../_shared/validation.pipe';
import { MeasuringUnitDto } from './measuring-unit.dto';


@Controller('api/measuringUnit')
export class MeasuringUnitController {
    constructor(private measuringUnitService:MeasuringUnitService){}
    @Get()
    @HttpCode(200)
    getAllCategories(){
       return this.measuringUnitService.getMeasuringUnits()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    createUser(@Body() data:MeasuringUnitDto){
        return  this.measuringUnitService.createMeasuringUnit(data)
    }
}
