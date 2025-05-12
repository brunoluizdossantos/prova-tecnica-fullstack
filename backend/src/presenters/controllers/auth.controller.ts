import { LoginUserDto } from '@application/dto/login-user.dto';
import { AuthService } from '@application/services/auth.service';
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {

    var id = await this.authService.getIdUserLogin(loginUserDto);

    if (id.length > 0) {
      const token = await this.authService.createToken(+id);
      return {
        message: "Autenticação realizada com sucesso!",
        statusCode: 201,
        token: token,
      };
    }
  
    throw new UnauthorizedException();
  }
}
