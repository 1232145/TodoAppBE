import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from '../../services/login/authService.service';
import { AuthGuard } from '../../services/login/authGuard.service';
import { UserDto } from '../../dtos/user.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard)
    @Post('')
    login(@Body() userDto: UserDto) {
        return this.authService.login(userDto);
    }
}
