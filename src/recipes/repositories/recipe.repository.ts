import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/decorators/entity-repository.decorator';
import { RecipeEntity } from '../entities/recipe.entity';

@EntityRepository(RecipeEntity)
export class RecipeRepository extends Repository<RecipeEntity> {}
