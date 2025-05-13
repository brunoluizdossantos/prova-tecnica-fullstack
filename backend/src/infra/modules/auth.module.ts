import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { UsersModule } from './users.module';
import { AuthService } from '@application/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from '@resolvers/auth.controller';
import { AuthGuard } from '@application/services/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY || '',
      signOptions: {
        expiresIn: '86400s'
      }
    }),
    DataModule
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard]
})
export class AuthModule {}
