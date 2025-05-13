import { CryptoDto } from '@application/dto/crypto.dto';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CryptoService {
  private readonly logger = new Logger(CryptoService.name);
  constructor(private readonly httpService: HttpService){}

  async findAllCryptosAsync(items: number, page: number): Promise<CryptoDto[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<CryptoDto[]>((process.env.CRYPTO_API_URL || '') + `&per_page=${items}&page=${page}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response?.data)
            throw `Erro ao buscar as criptomoedas. Erro: ${error.response?.data}`;
          }
        )
      )
    )
    return data;
  }
}
