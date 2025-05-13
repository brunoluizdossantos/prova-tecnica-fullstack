import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';
import { HttpModule } from '@nestjs/axios';
import { CryptoModule } from './crypto.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    CryptoModule,
    DataModule,
    UsersModule
  ],
})
export class AppModule {}
