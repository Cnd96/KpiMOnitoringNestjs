import {  IsNotEmpty } from "class-validator";

export class ClusterDto{
    @IsNotEmpty()
    clusterName:string;
}
