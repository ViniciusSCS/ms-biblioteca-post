import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postBiblioteca() {
    return {
      statusCode: 200,
      message: 'Recebe Requisição'
    }
  }
}
