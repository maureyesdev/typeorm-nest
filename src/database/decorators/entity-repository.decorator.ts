import { SetMetadata } from '@nestjs/common';

export const ENTITY_CUSTOM_REPOSITORY = 'ENTITY_CUSTOM_REPOSITORY';

export const EntityRepository = (entity: Function): ClassDecorator =>
  SetMetadata(ENTITY_CUSTOM_REPOSITORY, entity);
