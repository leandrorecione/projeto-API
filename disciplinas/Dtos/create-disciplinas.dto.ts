import { IsNumber, IsString } from 'class-validator';

export class CreateDisciplinaDto {

@IsString()
nome: string

@IsString()
professor: string

@IsNumber()
cargaHoraria: number

}
