import { AuthService } from './auth.service';
import { LoginDto } from '../auth/Dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(logindto: LoginDto): Promise<{
        access_token: string;
    }>;
}
