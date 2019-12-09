import {  IsNotEmpty } from "class-validator";

export class KpiDto{

    kpiId?:number;
    @IsNotEmpty()
    kpiName:string;

    @IsNotEmpty()
    type:string;

    @IsNotEmpty()
    categoryId:number;

    @IsNotEmpty()
    measuringUnitId:number;

    @IsNotEmpty()
    clusterId:number;

    @IsNotEmpty()
    description:string;
}
