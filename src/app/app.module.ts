import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/modules/database.module';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [DatabaseModule, RecipesModule],
})
export class AppModule {}
