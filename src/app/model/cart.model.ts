import { ProductModel } from './product.model';

export class CartModel {
  constructor(public product?: ProductModel,
              public quantity?:number) {}
}
