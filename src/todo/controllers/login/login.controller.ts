import { Controller, Get, Inject, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { AuthGuard } from '../../services/login/authGuard.service';
import { UserDto } from '../../dtos/user.dto';

@Controller('login')
export class LoginController {
    constructor(@Inject('LOGIN_SERVICE') private readonly loginService: LoginService) {}

    @Post('login')
    async login(@Body() userDto: UserDto): Promise<{access_token: string}> {
        const {username, password} = userDto;
        const isValid = this.loginService.validateUser(username, password);

        if (isValid) {
            return this.loginService.login(userDto);
        }
        else {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
    }
}
