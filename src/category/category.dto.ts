import {  IsNotEmpty } from "class-validator";

export class CatergoryDto{
    @IsNotEmpty()
    categoryName:string;
}
