import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DisciplinaService  } from './disciplinas.service';
import { CreateDisciplinaDto} from './Dtos/create-disciplinas.dto';
import { UpdateDisciplinadto } from './Dtos/update-disciplina.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('disciplinas')
export class DisciplinaController {
 constructor (private readonly disciplinaservice: DisciplinaService) {}


@Post()
criar(@Body() dto: CreateDisciplinaDto){
  return  this.disciplinaservice.criar(dto);
}

@Get()
buscar(){
  return this.disciplinaservice.buscar();
}

@Get(":id")
buscarUm(@Param ('id') id: string){
  return this.disciplinaservice.buscarUm(Number (id));
}

@Put(":id")
atualizar(@Param ('id') id: string, @Body() dto: UpdateDisciplinadto) {
  return this.disciplinaservice.atualizar(Number(id), dto);
}

@Delete(':id')
deletar(@Param ('id') id:string){
  return this.disciplinaservice.deletar(Number(id));
}

}
