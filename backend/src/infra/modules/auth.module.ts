import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { UsersModule } from './users.module';
import { AuthService } from '@application/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from '@resolvers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 1800
      }
    }),
    DataModule,
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
