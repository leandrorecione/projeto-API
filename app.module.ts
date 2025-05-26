import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module'; 
import { AlunosModule } from 'src/alunos/alunos.module';
import { DisciplinasModule } from 'src/disciplinas/disciplinas.module'; 

@Module({
    imports: [AppModule,
      PrismaModule,
      AlunosModule,
      DisciplinasModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
