import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Type(() => Number)
    limit?: number;

    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    offset?: number;

}