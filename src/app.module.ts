import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DatabaseProviders } from '../dist/database/database.providers';
import { WorkModule } from './work/work.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), DatabaseModule, WorkModule],
  controllers: [AppController],
  providers: [AppService, DatabaseProviders],
})

export class AppModule { }
