import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from '../interfaces/database-config.interface';

export const databaseConfig = registerAs<DatabaseConfig>('database', () => ({
  host: process.env.ORM_HOST,
  username: process.env.ORM_USERNAME,
  password: process.env.ORM_PASSWORD,
  database: process.env.ORM_DATABASE,
  port: parseInt(process.env.ORM_PORT, 10),
  entities: [process.env.ORM_ENTITIES],
}));
