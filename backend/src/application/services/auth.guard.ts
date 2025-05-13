import { AuthService } from "@application/services/auth.service";
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
 
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();
            const { authorization }: any = request.headers;
            if (!authorization || authorization.trim() === '') {
                throw new UnauthorizedException('Por favor forneça um token de autenticação.');
            }
            const authToken = authorization.replace(/bearer/gim, '').trim();
            const resp = await this.authService.validateToken(authToken);
            request.decodedData = resp;
            return true;
        } catch (error) {
            throw new UnauthorizedException(error.message || 'A sessão expirou! Por favor, inicie novamente sua sessão');
        }
    }
}