import { Component } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { ImageModel } from '../model/image.model';
import { DecimalPipe } from '@angular/common';
import {ProductQuantityInputComponent} from "../components/product-quantity-input/product-quantity-input.component";

@Component({
  selector: 'ecs-product',
  standalone: true,
  imports: [
    DecimalPipe,
    ProductQuantityInputComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product: ProductModel = new ProductModel('Sneaker Company',
    'Fall Limited Edition Sneakers',
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`1l withstand everything the weather can offer.',
    250.00,
    50.00,
    [
      new ImageModel('assets/img/image-product-1.jpg',
        'assets/img/image-product-1-thumbnail.jpg'),
      new ImageModel('assets/img/image-product-2.jpg',
        'assets/img/image-product-2-thumbnail.jpg'),
      new ImageModel('assets/img/image-product-3.jpg',
        'assets/img/image-product-3-thumbnail.jpg'),
      new ImageModel('assets/img/image-product-4.jpg',
        'assets/img/image-product-4-thumbnail.jpg')
    ]);

  calculateDiscount(product:ProductModel): number {
    return product.productPrice - product.productPrice * (product.productDiscount / 100);
  }
}
