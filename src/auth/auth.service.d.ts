import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validarUsuario(email: string, senha: string): Promise<any>;
    login(usuario: any): Promise<{
        access_token: string;
    }>;
}
