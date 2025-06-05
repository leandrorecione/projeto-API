import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './Dto/create-aluno.dto';
import { UpdateAlunosDto } from './Dto/update-aluno.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('alunos')
export class AlunosController {
 constructor (private readonly alunoservice: AlunosService) {}


@Post()
criar(@Body() dto: CreateAlunoDto){
  return  this.alunoservice.criar(dto);
}

@Get()
buscar(){
  return this.alunoservice.buscar();
}

@Get(":id")
buscarUm(@Param ('id') id: string){
  return this.alunoservice.buscarUm(Number (id));
}

@Put(":id")
atualizar(@Param ('id') id: string, @Body() dto: UpdateAlunosDto) {
  return this.alunoservice.atualizar(Number(id), dto);
}

@Delete(':id')
deletar(@Param ('id') id:string){
  return this.alunoservice.deletar(Number(id));
}










}
