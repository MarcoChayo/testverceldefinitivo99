import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Solicitudes de Login')
@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService){}

    @Post('register')
    registerUser(@Body() UserObject : LoginAuthDto) {
        return this.authService.register(UserObject)
    }

    @Post('login')
    loginUser(@Body() UserObjectLogin: LoginAuthDto){
        return this.authService.login(UserObjectLogin)
    }

}
