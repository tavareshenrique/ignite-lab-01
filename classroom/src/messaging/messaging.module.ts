import { Module } from '@nestjs/common';

import { PurchaseController } from './controllers/purchases.controller';

@Module({
  controllers: [PurchaseController],
})
export class MessagingModule {}
