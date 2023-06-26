import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateToDoDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    job: string;

    //@IsNotEmpty()
    description: string;
}