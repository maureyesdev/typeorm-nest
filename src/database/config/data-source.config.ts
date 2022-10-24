import { DataSource } from 'typeorm';
import { dataSourceConfig } from './database.config';

export const dataSource = new DataSource(dataSourceConfig);
