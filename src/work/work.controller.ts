import { Body, Controller, Post } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
    constructor(private readonly workService: WorkService) { }

    @Post()
    postLibrary(@Body() body: any) {
        return this.workService.postLibrary(body)
    }
}
