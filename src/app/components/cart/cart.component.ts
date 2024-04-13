import { Component, Input } from '@angular/core';
import { DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { CartModel } from '../../model/cart.model';

@Component({
  selector: 'ecs-cart',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input()
  cartProducts: CartModel[] = [];

  show: boolean = false;


  getImage(cartProduct: CartModel): string|undefined {
    let image: string | undefined = '';
    if(cartProduct?.product?.images && cartProduct?.product?.images?.length > 0) {
      image = cartProduct?.product?.images[0]?.imageThumbnail;
    }

    return image;
  }

  priceCalc(cartProduct: CartModel): number|undefined {
    return cartProduct.product.productPrice * (cartProduct.product.productDiscount / 100) * cartProduct.quantity;
  }

  showCart() {
    this.show = !this.show;
  }

  remove(cartProduct: CartModel) {
    this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
  }
}
