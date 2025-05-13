 
import { LoginUserDto } from "@application/dto/login-user.dto";
import { PrismaService } from "@infra/data/client/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
 
@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService) { }

    async signIn(loginUserDto: LoginUserDto): Promise<string> {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: loginUserDto.email,
                password: loginUserDto.password
            }
        });

        if (!user)
            throw new UnauthorizedException('Não foi possível realizar sua autenticação.');

        const token = await this.createToken(+user?.id);

        return token;
    }
 
    async createToken(id: number) {
        return this.jwtService.sign({ id });
    }
 
    async validateToken(token: string) {
        try {
            return await this.jwtService.verifyAsync(token.replace("Bearer ", ""), {
                secret: process.env.JWT_SECRET_KEY
            });
        } catch (err) {
            return false;
        }
    }
}