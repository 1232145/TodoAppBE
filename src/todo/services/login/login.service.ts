import { Injectable } from '@nestjs/common';
import { UserDto } from '../../dtos/user.dto';

@Injectable()
export class LoginService {
    private readonly users: UserDto[];

    constructor() {
        this.users = [
            {id: 1, username: 'admin', password: 'admin'}
        ]
    }

    findUser(username: string) {
        return this.users.find(user => user.username === username);
    }

    validateUser(username: string, password: string) {
        const user = this.findUser(username);

        if (user && user.password === password) {
            return user;
        }

        return undefined;
    }
}
