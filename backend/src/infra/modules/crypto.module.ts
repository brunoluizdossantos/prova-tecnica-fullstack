import { CryptoService } from '@application/services/crypto.service';
import { Module } from '@nestjs/common';
import { CryptoController } from '@resolvers/crypto.controller';
import { AuthModule } from './auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    AuthModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }),
    }),
  ],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
