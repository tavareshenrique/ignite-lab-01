import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('test')
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get('ok')
  @UseGuards(AuthorizationGuard)
  hello() {
    return this.prisma.customer.findMany();
  }
}
