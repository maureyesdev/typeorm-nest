import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field()
  title: string;
}
