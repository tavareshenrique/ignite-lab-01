import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { AuthorizationGuard } from '../../http/auth/authorization.guard';

import { PrismaService } from 'src/database/prisma/prisma.service';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello World';
  }
}
