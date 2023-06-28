import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { ValidateTodo } from './middlewares/validate-todo,middleware';
import { LoginController } from './controllers/login/login.controller';
import { LoginService } from './services/login/login.service';


@Module({
  controllers: [TodoController, LoginController],
  providers: [TodoService, {provide: 'LOGIN_SERVICE', useClass: LoginService}]
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
