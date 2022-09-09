import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class Recipe {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;
}
