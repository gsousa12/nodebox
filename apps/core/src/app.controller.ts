import { Controller, Get } from '@nestjs/common';
import { User } from '@nodebox/types';

@Controller()
export class AppController {
  @Get('user')
  getUser(): User {
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };
  }
}
