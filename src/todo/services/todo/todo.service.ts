import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from 'src/todo/dtos/todo.dto';

@Injectable()
export class TodoService {
    todoList = [
        {
            id: 1,
            job: 'laundry',
            description: ''
        },
        {
            id: 2,
            job: 'homework',
            description: ''
        },
        {
            id: 3,
            job: 'dish',
            description: ''
        },
    ]

    getTodo() {
        return this.todoList;
    }

    getTodoId(id: Number) {
        return this.todoList.find(item => item.id === id);
    }

    createTodo(createToDoDto: CreateToDoDto) {
        this.todoList.push(createToDoDto);
    }

    deleteTodo(id: Number) {
        let removed = false;

        this.todoList = this.todoList.filter(item => {
            if (item.id !== id) {
                return item;
            }
            else {
                removed = true;
            }
        })

        return removed;
    }
}
