import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly loginService: LoginService) {}

  canActivate(context: ExecutionContext){
    const request = context.switchToHttp().getRequest();
    const { username, password } = request.body;

    const isAuthenticated = this.loginService.validateUser(username, password) !== undefined;

    return isAuthenticated;
  }
}
