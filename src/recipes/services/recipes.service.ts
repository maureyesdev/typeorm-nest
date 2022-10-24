import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from '../dto/create-recipe.input';
import { Recipe } from '../models/recipe.model';
import { RecipeRepository } from '../repositories/recipe.repository';

@Injectable()
export class RecipesService {
  constructor(private readonly recipesRepository: RecipeRepository) {}

  async createOne(createRecipeInput: CreateRecipeInput) {
    const recipeEntity = this.recipesRepository.create({ ...createRecipeInput })
    console.log('🚀 ~ recipeEntity', recipeEntity);
    const recipe = await this.recipesRepository.save(recipeEntity);
    return recipe;
  }

  async getMany() {
    return await this.recipesRepository.find();
  }

  async getOne(id: number) {
    return await this.recipesRepository.findOne({ where: { id } });
  }
}
