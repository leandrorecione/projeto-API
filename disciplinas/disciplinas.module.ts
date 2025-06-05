import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplinas.service'; 
import { DisciplinaController } from './disciplinas.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DisciplinaController],
  providers: [DisciplinaService]
})
export class DisciplinasModule {}
