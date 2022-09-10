import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RecipesService } from './services/recipes.service';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { EntitiesModule } from '../database/modules/entities.module';
import { RecipeRepository } from './repositories/recipe.repository';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: '/recipes/gql',
    }),
    EntitiesModule.forRepositories([RecipeRepository]),
  ],
  providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}
