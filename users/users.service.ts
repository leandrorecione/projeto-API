import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async buscarEmail(email: string) {
  return this.prisma.user.findUnique({ where: { email } });
}
}
