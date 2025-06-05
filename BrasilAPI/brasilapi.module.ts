import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BrasilApiService } from './brasilapi.service';
import { BrasilApiController } from './brasilapi.controller';

@Module({
  imports: [HttpModule],
  providers: [BrasilApiService],
  controllers: [BrasilApiController],
  exports: [BrasilApiService]
})
export class BrasilApiModule {}
