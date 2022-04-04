import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';

import { TestController } from './test/test.controller';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TestController],
})
export class HttpModule {}
