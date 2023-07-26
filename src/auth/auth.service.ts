import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private pessoasService: PessoasService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    let pessoa = null;
    try {
      pessoa = await this.pessoasService.findPessoaByMail(email);
    } catch {
      pessoa = null;
    }
    const payload = { sub: user._id, username: user.email, pessoa: pessoa };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
