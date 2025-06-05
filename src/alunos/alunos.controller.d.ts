import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './Dto/create-aluno.dto';
import { UpdateAlunosDto } from './Dto/update-aluno.dto';
export declare class AlunosController {
    private readonly alunoservice;
    constructor(alunoservice: AlunosService);
    criar(dto: CreateAlunoDto): Promise<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    }>;
    buscar(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    }[]>;
    buscarUm(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    atualizar(id: string, dto: UpdateAlunosDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletar(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
