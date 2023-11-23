import { Injectable } from '@angular/core';
import { Productlist } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  cartData: Productlist[] = [];
  cart: BehaviorSubject<Productlist[]>

  constructor() {
    this.cart = new BehaviorSubject(this.cartData);
  }
  addItem(item: Productlist) {
    this.cartData.push(item);
    this.cart.next(this.cartData);
  }



  data: Productlist[] = [
    {
      "id": 1,
      "price": 130,
      "name": "CPU",
      "color": "DodgerBlue",
      "category": "Technology",
      "description": "Central processing Unit",
      "image": ('../../assets/images/cpu.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
    {
      "id": 2,
      "price": 190,
      "name": "Burger",
      "color": "pink",
      "category": "Snack",
      "description": "Food",
      "image": ('../../assets/images/burger.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
    {
      "id": 3,
      "price": 230,
      "name": "French fries",
      "color": "Tomato",
      "category": "Food",
      "description": "Side dish or Snack ",
      "image": ('../../assets/images/Frenchfries.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
    {
      "id": 4,
      "price": 880,
      "name": "IceCream",
      "color": "red",
      "category": "Food",
      "description": "Side dish",
      "image": ('../../assets/images/icecream.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
    {
      "id": 5,
      "price": 190,
      "name": "Computer",
      "color": "SlateBlue",
      "category": "Technology",
      "description": "Desktop",
      "image": ('../../assets/images/computer.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
    {
      "id": 6,
      "price": 770,
      "name": "Apple",
      "color": "pink",
      "category": "Fruits",
      "description": "Side Food",
      "image": ('../../assets/images/apple.png'),
      "crossicon": ('../../assets/images/close-red-icon.png'),
      "quantity": 0
    },
  ];
  onGet() {
    return this.data;
  }
}
