import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';
import { CreateRecipeInput } from '../dto/create-recipe.input';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Mutation(() => Recipe)
  createRecipe(@Args('input') createRecipeInput: CreateRecipeInput) {
    return this.recipesService.createOne(createRecipeInput);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  getRecipes() {
    return this.recipesService.getMany();
  }

  @Query(() => Recipe, { name: 'recipe' })
  getRecipe(@Args('id', { type: () => Int }) id: number) {
    return this.recipesService.getOne(id);
  }
}
