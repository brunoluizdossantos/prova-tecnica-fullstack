import { IsEmail, IsEmpty, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @Length(3)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;    

    @IsString()
    //@IsEmpty()
    description: string;

    @IsString()
    //@IsEmpty()
    image: string;

    @Length(3)
    @IsString()
    @IsNotEmpty()
    password: string;
}
