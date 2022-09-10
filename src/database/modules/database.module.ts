import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { databaseConfig } from '../config';
import { DatabaseConfig } from '../interfaces/database-config.interface';
import { EntitiesModule } from './entities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<DatabaseConfig>) => {
        const { ...config } = configService.get<DatabaseConfig>('database');

        return {
          type: 'postgres',
          ...config,
          synchronize: true,
          logging: true,
        } as PostgresConnectionOptions;
      },
    }),
    EntitiesModule,
  ],
})
export class DatabaseModule {}
