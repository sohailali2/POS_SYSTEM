// right-side.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Productlist } from '../product.model';

@Component({
  selector: 'app-right-side',
  template: `
    <div *ngFor="let product of productService.availableProducts" (click)="addProduct(product)">
      {{ product.name }}
    </div>
  `,
})
export class RightSideComponent {
  constructor(public productService: ProductService) { }

  addProduct(product: Productlist) {
    this.productService.addProduct(product);
  }
}
