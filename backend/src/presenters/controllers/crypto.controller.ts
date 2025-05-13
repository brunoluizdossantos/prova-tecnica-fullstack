import { CryptoService } from '@application/services/crypto.service';
import { CryptoDto } from '@application/dto/crypto.dto';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@application/services/auth.guard';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @UseGuards(AuthGuard)
  @Get(':items/:page')
  async findAllCryptos(@Param('items') items: number = 10, @Param('page') page: number = 1): Promise<CryptoDto[]> {
    return await this.cryptoService.findAllCryptosAsync(items, page);
  }
}
