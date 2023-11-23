// product.service.ts
import { Injectable } from '@angular/core';
import { Productlist } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  availableProducts: Productlist[] = [];

  selectedProducts: Productlist[] = [];

  addProduct(product: Productlist) {
    const existingProduct = this.selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity ?? 0) + 1;
    } else {
      this.selectedProducts.push({ ...product, quantity: 1 });
    }
  }
}
