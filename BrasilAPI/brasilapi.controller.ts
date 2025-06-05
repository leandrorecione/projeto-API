import { Controller, Get, Param } from '@nestjs/common';
import { BrasilApiService } from './brasilapi.service';

@Controller('brasilapi')
export class BrasilApiController {
  constructor(private readonly brasilApiService: BrasilApiService) {}

  @Get(':cep')
  async buscarCep(@Param ('cep') cep: string) {
    return this.brasilApiService.buscarCep(cep);
  }
}
