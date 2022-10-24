import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.ORM_HOST,
  port: parseInt(process.env.ORM_PORT, 10),
  username: process.env.ORM_USERNAME,
  password: process.env.ORM_PASSWORD,
  schema: process.env.ORM_SCHEMA,
  database: process.env.ORM_DATABASE,
  entities: [process.env.ORM_ENTITIES],
  migrations: [process.env.ORM_MIGRATIONS],
  migrationsTableName: process.env.ORM_MIGRATIONS_TABLE_NAME,
  synchronize: !!process.env.ORM_SYNCHRONIZE,
  logging: true,
  migrationsRun: !!process.env.ORM_MIGRATIONS_RUN,
};

export const databaseConfig = registerAs<DataSourceOptions>(
  'database',
  () => dataSourceConfig,
);
