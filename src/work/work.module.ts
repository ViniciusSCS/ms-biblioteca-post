import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { workProviders } from './work.providers';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...workProviders,
        WorkService,
    ],
    controllers: [WorkController],
})
export class WorkModule { }
