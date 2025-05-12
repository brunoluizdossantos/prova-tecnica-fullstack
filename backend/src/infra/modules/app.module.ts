import { Module } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';
import { DataModule } from './data.module';
import { UsersModule } from './users.module';

@Module({
  imports: [DataModule, UsersModule],
  providers: [AppService],
})
export class AppModule {}
