 
import { LoginUserDto } from "@application/dto/login-user.dto";
import { PrismaService } from "@infra/data/client/prisma.service";
import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
 
@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService) { }

    async signInAsync(loginUserDto: LoginUserDto): Promise<any> {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: loginUserDto.email
            }
        });

        if (!user) throw new NotFoundException('Usuário não encontrado.');

        const passwordMatch = await bcrypt.compare(loginUserDto.password, user.password);

        if (!passwordMatch) throw new UnauthorizedException('Credenciais inválidas.');

        const token = await this.createTokenAsync(+user?.id);

        if (token.length > 0) {
            return {
                message: "Autenticação realizada com sucesso.",
                statusCode: 201,
                token: token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    description: user.description,
                    image: user.image
                }
            };
        } else {
            throw new UnauthorizedException('Não foi possível realizar sua autenticação.');
        }
    }
 
    async createTokenAsync(id: number): Promise<string> {
        return this.jwtService.signAsync({ id });
    }
 
    async validateTokenAsync(token: string) {
        try {
            return await this.jwtService.verifyAsync(token.replace("Bearer ", ""), {
                secret: process.env.JWT_SECRET_KEY
            });
        } catch (err) {
            return false;
        }
    }
}