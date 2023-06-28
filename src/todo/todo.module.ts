import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { ValidateTodo } from './middlewares/validate-todo,middleware';
import { LoginController } from './controllers/login/login.controller';
import { AuthService } from './services/login/authService.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './services/login/login.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret_key',
      signOptions: {expiresIn: '1h'}
    })
  ],
  controllers: [TodoController, LoginController],
  providers: [TodoService, AuthService, LoginService]
})

export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateTodo).forRoutes(
      {
        path: 'todo/create',
        method: RequestMethod.POST,
      }
    )
  }
}
