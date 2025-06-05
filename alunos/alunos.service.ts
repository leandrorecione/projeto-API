import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAlunoDto } from './Dto/create-aluno.dto';
import { UpdateAlunosDto } from './Dto/update-aluno.dto';
import { BrasilApiService } from 'src/BrasilAPI/brasilapi.service';

@Injectable()
export class AlunosService {
  constructor (private prisma: PrismaService,
     private readonly brasilApiService: BrasilApiService,
  ){}

async criar(data: CreateAlunoDto) {
  const endereco = await this.brasilApiService.buscarCep(data.cep);
  return this.prisma.aluno.create({ 
    data: {
      nome: data.nome,
      idade: data.idade,
      email: data.email,
      cep: data.cep,
      rua: endereco.street,
      cidade: endereco.city, 
      estado: endereco.state,
    },
 });
}

buscar() {
  return this.prisma.aluno.findMany();
}

buscarUm(id: number) {
  return this.prisma.aluno.findUnique({ where: { id } });
}

atualizar(id: number, data: UpdateAlunosDto) {
  return this.prisma.aluno.update({ where: { id }, data });
}

deletar(id: number) {
  return this.prisma.aluno.delete({where: { id } });
}















}
