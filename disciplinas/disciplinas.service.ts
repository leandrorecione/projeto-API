import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDisciplinaDto } from './Dtos/create-disciplinas.dto'; 
import { UpdateDisciplinadto } from './Dtos/update-disciplina.dto'; 

@Injectable()
export class DisciplinaService {
  constructor (private prisma: PrismaService){}

criar(data: CreateDisciplinaDto) {
  return this.prisma.disciplina.create({ data });
}

buscar() {
  return this.prisma.disciplina.findMany();
}

buscarUm(id: number) {
  return this.prisma.disciplina.findUnique({ where: { id } });
}

atualizar(id: number, data: UpdateDisciplinadto) {
  return this.prisma.disciplina.update({ where: { id }, data });
}

deletar(id: number) {
  return this.prisma.disciplina.delete({where: { id } });
}


}

