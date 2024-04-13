import { ProductModel } from './product.model';

export class CartModel {
  constructor(public product: ProductModel = new ProductModel(),
              public quantity:number = 0) {}
}
