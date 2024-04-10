import { Component } from '@angular/core';

@Component({
  selector: 'ecs-product-quantity-input',
  standalone: true,
  imports: [],
  templateUrl: './product-quantity-input.component.html',
  styleUrl: './product-quantity-input.component.scss'
})
export class ProductQuantityInputComponent {

  input:number = 0;

  add(): void {
    ++this.input;
  }

  minus():void {
    if(this.input > 0) {
      --this.input;
    }
  }
}
