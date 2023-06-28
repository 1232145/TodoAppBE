import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}