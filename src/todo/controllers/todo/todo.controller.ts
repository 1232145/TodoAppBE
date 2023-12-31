import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from 'src/todo/services/todo/todo.service';
import {Request, Response} from 'express';
import { CreateToDoDto } from '../../dtos/todo.dto';

 
@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get('')
    getAllTodo() {
        return this.todoService.getTodo();
    }

    @Get(':id')
    getTodo(
        @Param('id', ParseIntPipe) id: number, 
        @Req() req: Request, 
        @Res() res: Response) 
    {
        const todo = this.todoService.getTodoId(id);
        
        if (todo) {
            res.send(todo);
        }
        else {
            res.status(400).send({msg: "error not found"})
        }
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createTodo(@Body() createToDoDto: CreateToDoDto, @Req() req: Request, 
    @Res() res: Response) {
        this.todoService.createTodo(createToDoDto); 
        res.send({msg: 'Created successfully'});
    }

    @Delete(':job')
    deleteTodo(@Param('job') job: string, @Req() req: Request, 
    @Res() res: Response) {
        const removed = this.todoService.deleteTodo(job);

        if (removed) {
            res.send({msg: 'Removed successfully'});
        }
        else {
            res.status(400).send({error: 'Removed unsucessful'});
        }
    } 
}
