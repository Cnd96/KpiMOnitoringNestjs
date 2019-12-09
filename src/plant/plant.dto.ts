import {  IsNotEmpty } from "class-validator";

export class PlantDto{

    @IsNotEmpty()
    clusterId:number;
    
    @IsNotEmpty()
    plantName:string;

    @IsNotEmpty()
    kpiRecordingMethod:string;

    @IsNotEmpty()
    location:string;

    @IsNotEmpty()
    userName:string;

}
