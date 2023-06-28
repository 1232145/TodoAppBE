// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Retrieve the access_token from the request headers
    const request = context.switchToHttp().getRequest();
    const access_token = request.headers['authorization'];


    const isAuthenticated = true;

    return isAuthenticated;
  }
}
