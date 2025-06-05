import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module'; 
import { AlunosModule } from 'src/alunos/alunos.module';
import { DisciplinasModule } from 'src/disciplinas/disciplinas.module'; 
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [AppModule,
      PrismaModule,
      AlunosModule,
      DisciplinasModule,
      AuthModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
