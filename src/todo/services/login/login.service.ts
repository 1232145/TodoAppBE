import { Injectable } from '@nestjs/common';
import { UserDto } from '../../dtos/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
    private readonly users: UserDto[];
    private readonly jwtService: JwtService;

    constructor() {
        this.users = [
            {id: 1, username: 'admin', password: 'admin'}
        ]
    }

    async findUser(username: string): Promise<UserDto | undefined> {
        return this.users.find(user => user.username === username);
    }

    async validateUser(username: string, password: string): Promise<UserDto | undefined> {
        const user = await this.findUser(username);

        if (user && user.password === password) {
            return user;
        }

        return undefined;
    }

    async login(user: any): Promise<{access_token: string}> {
        const payload = {username: user.username, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
