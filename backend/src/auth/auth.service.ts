import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Simulación: usuario fijo (puedes cambiarlo)
    const validEmail = 'admin@hyperbazar.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      return { message: 'Login correcto ✅', email };
    } else {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }
  }
}
