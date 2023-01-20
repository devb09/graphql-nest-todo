import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional, IsInt} from 'class-validator';

@InputType()
export class UpdateTodoDto {
  //decorador que muestra dato a exponer en graphql
  @Field(() => Int)
  @IsInt()
  @MinLength(1)
  id: number;

  @Field(() => String, {
    description: 'What´s is needed to be done',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  done?: boolean;
}
