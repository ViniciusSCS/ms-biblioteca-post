import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Work } from './work.entity';

@Injectable()
export class WorkService {
    constructor(
        @Inject('WORK_REPOSITORY')
        private workRepository: Repository<Work>,
    ) { }

    async findAll(): Promise<Work[]> {
        return this.workRepository.find();
    }

    async postLibrary(body: any) {
        
        if(!body) {
            return {
                statusCode: 400,
                message: "Don't save"
            }
        }

        const work = await this.workRepository.save(body)
        
        return {
            statusCode: 200,
            data: work
        }
    }
}