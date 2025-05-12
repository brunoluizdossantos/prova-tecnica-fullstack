 
import { LoginUserDto } from "@application/dto/login-user.dto";
import { PrismaService } from "@infra/data/client/prisma.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
 
@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService) { }

    async getIdUserLogin(loginUserDto: LoginUserDto): Promise<string> {
        const user = await this.prismaService.user.findFirst({
            where: {
                email: loginUserDto.email,
                password: loginUserDto.password
            },
            select: {
                id: true
            }
        });

        if (!user)
            return "";

        return user.id;
    }
 
    async createToken(id: number) {
        return this.jwtService.sign({ id });
    }
 
    async checkToken(token: string) {
        try {
            return this.jwtService.verify(token.replace("Bearer ", ""));
        } catch (err) {
            return false;
        }
    }
}