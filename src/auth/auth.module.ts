import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Usuarios } from '../../entities/Usuarios';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
  TypeOrmModule.forFeature([Usuarios]), 
  JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: {expiresIn: '20h' }
  })
],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
