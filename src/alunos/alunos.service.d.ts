import { PrismaService } from '../../prisma/prisma.service';
import { CreateAlunoDto } from './Dto/create-aluno.dto';
import { UpdateAlunosDto } from './Dto/update-aluno.dto';
import { BrasilApiService } from 'src/BrasilAPI/brasilapi.service';
export declare class AlunosService {
    private prisma;
    private readonly brasilApiService;
    constructor(prisma: PrismaService, brasilApiService: BrasilApiService);
    criar(data: CreateAlunoDto): Promise<{
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
    buscarUm(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    atualizar(id: number, data: UpdateAlunosDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        idade: number;
        email: string;
        cep: string;
        rua: string;
        cidade: string;
        estado: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletar(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
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
