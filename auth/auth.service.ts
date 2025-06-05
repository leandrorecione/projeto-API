import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

async validarUsuario(email: string, senha: string): Promise<any> {
  const usuario = await this.usersService.buscarEmail(email);
  
  if (usuario && await bcrypt.compare(senha, usuario.password)) {
    const { password, ...result } = usuario;
    return result;
  }
  
  return null;
}

async login(usuario: any) {
  const payload = { username: usuario.email, sub: usuario.id };
  return {
    access_token: this.jwtService.sign(payload),
  };
}

}