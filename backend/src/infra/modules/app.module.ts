import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    AuthModule,
    DataModule,
    UsersModule
  ],
})
export class AppModule {}
