import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './dtos/inputs/create-todo.input';
import { UpdateTodoDto } from './dtos/inputs/update-todo.input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  //¿qué va a regresar va ente parentesis de mutation o query?
  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    console.log(createTodoInput);
    return this.todoService.create(createTodoInput);
  }

  //¿qué va a regresar va ente parentesis de mutation o query?
  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(@Args('updateTodo') updateTodo: UpdateTodoDto): Todo {
    return this.todoService.update(updateTodo);
  }

  removeTodo() {}
}
