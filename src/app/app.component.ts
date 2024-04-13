import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartModel } from './model/cart.model';

@Component({
  selector: 'ecs-root',
  standalone: true,
    imports: [ RouterOutlet, HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-sneaker';

  cartProducts: CartModel[] = [];

  addProduct(product: CartModel) {
    this.cartProducts.push(product);
  }

  passFunctionToChild(componentRef: any) {
    if(componentRef instanceof AppComponent) {
      return;
    }
    componentRef.addProduct = this.addProduct.bind(this);
  }
}
