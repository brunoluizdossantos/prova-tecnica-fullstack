import { LoginUserDto } from '@application/dto/login-user.dto';
import { AuthService } from '@application/services/auth.service';
import { Controller, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {

    var token = await this.authService.signIn(loginUserDto);

    if (token.length > 0) {
      return {
        message: "Autenticação realizada com sucesso.",
        statusCode: 201,
        token: token,
      };
    }
  
    throw new UnauthorizedException('Não foi possível realizar sua autenticação.');
  }
}
