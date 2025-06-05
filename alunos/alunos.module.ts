import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { PrismaModule } from 'prisma/prisma.module';
import { BrasilApiModule } from 'src/BrasilAPI/brasilapi.module';


@Module({
imports: [PrismaModule, BrasilApiModule],
controllers: [AlunosController],
providers: [AlunosService],
})
export class AlunosModule {}
