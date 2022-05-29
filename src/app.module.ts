import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), DatabaseModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
