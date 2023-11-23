import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  totalItems: number = 0;
  totalAmount: number = 0;
  taxamount: number = 0;
  discountedAmount: number = 0;
  constructor() { }
}
