import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'bibliotecadb',
                entities: [
                    'src/models/**/*.ts'
                ],
                migrations: [
                    "src/database/migrations/**/*.ts"
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];

@Injectable()
export class DatabaseProviders { }
