import { Module } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [],
  providers: [DisciplinasService]
})
export class DisciplinasModule {}
