import { LoginUserDto } from '@application/dto/login-user.dto';
import { AuthService } from '@application/services/auth.service';
import { Controller, Post, Body, UnauthorizedException, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async signIn(@Body(new ValidationPipe()) loginUserDto: LoginUserDto) {
    return await this.authService.signInAsync(loginUserDto);
  }
}
