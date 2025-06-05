import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BrasilApiService {
  constructor(private readonly httpService: HttpService) {}

async buscarCep(cep: string): Promise<any> {
  const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
  const response$ = this.httpService.get(url);
  const response = await firstValueFrom(response$);
  return response.data;
}
}