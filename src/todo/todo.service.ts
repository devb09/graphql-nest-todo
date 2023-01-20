import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput } from './dtos/inputs/create-todo.input';
import { UpdateTodoDto } from './dtos/inputs/update-todo.input';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', done: false },
    { id: 2, description: 'Piedra del Espacio', done: false },
    { id: 3, description: 'Piedra del Poder', done: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`todo with id ${id} not found`);
    return todo;
  }

  create(createTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = createTodoInput.description;
    todo.done = false;
    todo.id = Math.max(...this.todos.map((todo) => todo.id)) + 1;
    this.todos.push(todo);
    return todo;
  }

  update(updateTodoDto: UpdateTodoDto): Todo {
    const { id, description, done } = updateTodoDto;

    const todoToUpdate = this.findOne(id);

    if (description) todoToUpdate.description = description;
    if (done != undefined) todoToUpdate.done = done;

    this.todos = this.todos.map((todo) => {
      return todo.id === id ? todoToUpdate : todo;
    });

    return todoToUpdate;
  }

  remove() {}
}
