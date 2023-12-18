// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import * as path from 'path'; // Import path module

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...require('../ormconfig'), // Use the existing ormconfig.js file
        entities: [path.join(__dirname, '**', '*.entity{.ts,.js}')],
      }),
    }),
  ],
})
export class AppModule {}
