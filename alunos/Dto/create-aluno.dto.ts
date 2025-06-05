import { IsNumber, IsString } from "class-validator";


export class CreateAlunoDto {

 @IsString()
  nome: string

  @IsString()
  cep: string

  @IsNumber()
  idade: number

    @IsString()
  email: string

 }