import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productlist } from '../product.model';
import { ProductlistService } from '../productlist.service';
import { ChangeDetectorRef } from '@angular/core';
import { ReceiptPopupComponent } from '../receipt-popup/receipt-popup.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})


export class FeaturesComponent {
  @Input() data1: any;
  @Output() addToBillEvent = new EventEmitter<any>();



  addToFeature(item: any) {
    this.addToBillEvent.emit(item);
  }

  public data: Productlist[] = [];
  public cartData: Productlist[] = [];
  public quantity: number = 1;
  public subtotal: number = 0;
  public totalItems: number = 0;
  public discountPercentage: number = 0;
  public taxPercentage: number = 0;
  public discountedAmount: number = 0;
  public taxamount: number = 0;
  public totalAmount: number = 0;


  showPopup: boolean = false;


  // constructor(public productlistService: ProductlistService) { }
  constructor(public productlistService: ProductlistService, private cdr: ChangeDetectorRef, private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.productlistService.onGet();
    this.cartData = this.productlistService.cartData;

    const { subtotal, totalItems } = this.calculateSubtotalAndItems();

    this.subtotal = subtotal;
    this.totalItems = totalItems;
  }

  // Function to open the sale popup
  openSalePopup() {
    this.updateSubtotalAndTotalItems();
    this.showPopup = true;
    // this.cdr.detectChanges();
  }

  hidePopup() {
    this.showPopup = false;
  }

  // Function to close the sale popup
  closeSalePopup() {
    this.showPopup = false;
  }



  addCart(t: Productlist) {
    console.log('Adding to cart:', t);
    if (!this.data || this.data.length === 0) {
      console.log("Product is not available");
    } else {
      const existingItem = this.cartData.find(item => item.id === t.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        t.quantity = 1;
        this.cartData.push(t);
      }

      t.total = t.price * (t.quantity || 0);

      this.addToBillEvent.emit(t);
    }
    const { subtotal, totalItems } = this.calculateSubtotalAndItems();
    this.subtotal = subtotal;
    this.totalItems = totalItems;
    console.log('Cart data after modification:', this.cartData);
  }


  deleteItem(item: any) {
    const index = this.cartData.indexOf(item);
    if (index !== -1) {
      this.cartData.splice(index, 1);
    }
    const { subtotal, totalItems } = this.calculateSubtotalAndItems();
    this.subtotal = subtotal;
    this.totalItems = totalItems;
  }
  increaseValue(item: Productlist) {
    item.quantity = (item.quantity || 0) + 1;
    item.total = item.price * (item.quantity || 0);
    this.updateSubtotalAndTotalItems();
  }

  decreaseValue(item: Productlist) {
    item.quantity = item.quantity && item.quantity > 0 ? item.quantity - 1 : 0;
    item.total = item.price * item.quantity;

    this.updateSubtotalAndTotalItems();
  }
  updateSubtotalAndTotalItems() {
    const { subtotal, totalItems, } = this.calculateSubtotalAndItems();

    this.subtotal = subtotal;
    this.totalItems = totalItems;

    this.dataService.totalItems = this.totalItems;
    this.dataService.totalAmount = this.totalAmount;
    this.dataService.taxamount = this.taxamount;
    this.dataService.discountedAmount = this.discountedAmount;

    // this.dataService.dataUpdated.emit();
  }

  calculateSubtotalAndItems() {
    let subtotal = 0;
    let totalItems = 0;

    for (const item of this.cartData || []) {
      subtotal += item.price * (item.quantity || 0);
      totalItems += item.quantity || 0;
    }
    const discountFactor = (this.discountPercentage / 100);
    const discountedSubtotal = subtotal * discountFactor;
    this.discountedAmount = +discountedSubtotal.toFixed(2);

    const taxcal = (this.taxPercentage / 100);
    const taxSubtotal = subtotal * taxcal;
    this.taxamount = +taxSubtotal.toFixed(2);


    this.totalAmount = subtotal + discountedSubtotal + taxSubtotal;
    console.log('total', this.totalAmount);
    this.cdr.detectChanges();

    return { subtotal, totalItems };
  }

  cancelSale() {
    this.cartData = [];
    this.subtotal = 0;
    this.totalItems = 0;
    this.discountPercentage = 0;
    this.taxPercentage = 0;
    this.discountedAmount = 0;
    this.taxamount = 0;
    this.totalAmount = 0;

    this.productlistService.cartData = this.cartData;
    window.location.reload();
  }


}
