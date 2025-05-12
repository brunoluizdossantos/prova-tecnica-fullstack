import { UsersService } from '@application/services/users.service';
import { Module } from '@nestjs/common';
import { UsersController } from '@resolvers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
