import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  //decorador que muestra dato a exponer en graphql
  @Field(() => String, { description: 'What´s is needed to be done' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  description: string;
}
