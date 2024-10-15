import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/register-auth.dto';
import { hash, compare} from 'bcrypt';
import { Usuarios } from '../../entities/Usuarios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor (
        @InjectRepository (Usuarios)
        private usuariosRepository: Repository <Usuarios>,
        private jwtService: JwtService
    ){}
    async register(userObject: LoginAuthDto) {
        const { password } = userObject;
        const plainToHash = await hash(password, 10);
        userObject = {...userObject, password:plainToHash};
        return this.usuariosRepository.save(userObject)
    }

    async login(UserObjectLogin: LoginAuthDto) {
        const {email, password} = UserObjectLogin;
        const findUser = await this.usuariosRepository.findOneBy({email});
        if(!findUser) throw new HttpException('USER_NOT_FOUND', 404);

        const checkPassword = await compare(password, findUser.password);
        if (!checkPassword) throw new HttpException('WRONG_PASSWORD', 403);

        const payload = { id:findUser.idUsuario, name: findUser.email};
        const token = this.jwtService.sign(payload);

        const data = {
            user: findUser,
            token
        };

        console.log(data.user.email);
        console.log(data.user.password);
        console.log(data.token);
        return data;

    }
        
}