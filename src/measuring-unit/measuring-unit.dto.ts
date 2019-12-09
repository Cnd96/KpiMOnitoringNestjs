import {  IsNotEmpty } from "class-validator";

export class MeasuringUnitDto{
    @IsNotEmpty()
    unitName:string;
    @IsNotEmpty()
    unitSymbol:string;
}
