import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { name: 'hello', description: 'returns hw' })
  helloWord(): string {
    return 'hw';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 10;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From Zero to argument TO (default 10)',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to = 10,
  ): number {
    return Math.floor(Math.random() * to) + 1;
  }
}
