import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @Length(3)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    description: string;
    
    image: string;

    @Length(3)
    @IsString()
    @IsNotEmpty()
    password: string;
}
