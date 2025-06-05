import { IsString, IsNumber } from "class-validator";

export class UpdateDisciplinadto {

@IsString()
nome: string

@IsString()
professor: string

@IsNumber()
cargaHoraria: number
  
}