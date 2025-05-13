import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @Length(3)
    @IsString()
    @IsNotEmpty()
    password: string;
}
