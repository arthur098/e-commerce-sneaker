import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      {
        path: 'product',
        loadChildren: () => import('./product/product.routes').then(p => p.PRODUCT_ROUTES)
      }
    ]
  }
];
