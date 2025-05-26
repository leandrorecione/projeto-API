import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AlunosService } from './alunos.service';

@Controller('alunos')
export class AlunosController {
  constructor (private readonly alunosservice: AlunosService){}

@Get()
buscar(){}

@Get()
buscarUm(){}

@Post()
criar(){}

@Patch()
atualizar(){}

@Delete()
deletar(){}










}
