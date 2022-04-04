import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

@Controller('test')
export class TestController {
  @Get('ok')
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Ok';
  }
}
