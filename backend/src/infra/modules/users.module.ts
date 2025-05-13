import { UsersService } from '@application/services/users.service';
import { Module } from '@nestjs/common';
import { UsersController } from '@resolvers/users.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
