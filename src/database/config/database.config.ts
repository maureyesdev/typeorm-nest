import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export const databaseConfig = registerAs<DataSourceOptions>('database', () => ({
  type: 'postgres',
  host: process.env.ORM_HOST,
  port: parseInt(process.env.ORM_PORT, 10),
  username: process.env.ORM_USERNAME,
  password: process.env.ORM_PASSWORD,
  database: process.env.ORM_DATABASE,
  entities: [process.env.ORM_ENTITIES],
  synchronize: true,
  logging: true,
  // migrations: []
  // migrationsRun: true,
}));
