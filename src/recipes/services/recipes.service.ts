import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from '../dto/create-recipe.input';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipesService {
  private readonly recipes: Recipe[] = [
    { id: 1, title: 'Tacos' },
    { id: 2, title: 'Burritos' },
  ];

  async createOne(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    return await new Promise((resolve) => {
      const recipe = { id: this.recipes.length + 1, ...createRecipeInput };
      this.recipes.push(recipe);
      resolve(recipe);
    });
  }

  async getMany(): Promise<Recipe[]> {
    return await new Promise((resolve) => resolve(this.recipes));
  }

  async getOne(id: number): Promise<Recipe> {
    return await new Promise((resolve) => {
      const recipe = this.recipes.find((recipe) => recipe.id === id);
      resolve(recipe);
    });
  }
}
