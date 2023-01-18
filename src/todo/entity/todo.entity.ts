import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { name: 'identifier' })
  id: number;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  done = false;
}
