import { IsNumber, IsString } from 'class-validator';


export class UpdateAlunosDto {

 @IsString()
  nome: string

  @IsString()
  cep: string

  @IsNumber()
  idade: number

    @IsString()
  email: string

   @IsString()
  rua: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

}