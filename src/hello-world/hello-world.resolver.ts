import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  helloWord(): string {
    return 'hm';
  }
}
