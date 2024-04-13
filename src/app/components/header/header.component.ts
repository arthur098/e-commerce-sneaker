import { Component, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartModel } from '../../model/cart.model';

@Component({
  selector: 'ecs-header',
  standalone: true,
  imports: [
    CartComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input()
  cartProducts: CartModel[] = [];

  openMenu() {
    (document.querySelector('.nav-wrapper') as HTMLElement).style.transform = 'scaleX(1)';
    document.body.style.overflow = 'hidden';
    document.body.insertAdjacentHTML('beforeend', '<div class="backdrop"></div>');
  }

  closeMenu() {
    (document.querySelector('.nav-wrapper') as HTMLElement).style.transform = 'scaleX(0)';
    (document.querySelector('.backdrop') as HTMLElement)?.remove();
    document.body.style.overflow = '';
  }
}
