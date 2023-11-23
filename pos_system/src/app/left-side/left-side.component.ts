// left-side.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-left-side',
  template: `
    <div *ngFor="let product of productService.selectedProducts">
      {{ product.name }} - Quantity: {{ product.quantity }}
    </div>
  `,
})
export class LeftSideComponent {
  constructor(public productService: ProductService) { }
}
