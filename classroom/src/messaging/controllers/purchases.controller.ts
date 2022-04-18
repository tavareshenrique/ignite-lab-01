import { Controller } from '@nestjs/common';

import { EventPattern, Payload } from '@nestjs/microservices';

export interface Customer {
  authUserId: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
}

export interface IPurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchaseController {
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: IPurchaseCreatedPayload) {
    console.log('payload ==>', payload);
  }
}
