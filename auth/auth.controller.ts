import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../auth/Dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body () logindto: LoginDto) {
    const usuario = await this.authService.validarUsuario(logindto.email, logindto.password);
    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return this.authService.login(usuario);
  }
}
