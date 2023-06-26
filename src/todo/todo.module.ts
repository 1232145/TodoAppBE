import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { ValidateTodo } from './middlewares/validate-todo,middleware';


@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateTodo).forRoutes(
      {
        path: 'todo/:id',
        method: RequestMethod.GET,
      }
    )
  }
}
