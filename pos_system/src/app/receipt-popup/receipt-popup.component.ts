import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productlist } from '../product.model';
import { ProductlistService } from '../productlist.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-receipt-popup',
  templateUrl: './receipt-popup.component.html',
  styleUrls: ['./receipt-popup.component.css']
})
export class ReceiptPopupComponent {

  // @Input() cartData: any[];
  // @Input() subtotal: number;
  @Input() totalItems: number = 0;
  @Input() totalAmount: number = 0;
  @Input() taxamount: number = 0;
  @Input() discountedAmount: number = 0;
  @Output() closePopup = new EventEmitter<void>();
  @Input() showPopup: boolean = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder, public productlistService: ProductlistService,
    private dataService: DataService) { }

  public cartData: Productlist[] = [];
  public subtotal: number = 0;
  public serialNumbers: number[] = [];
  // public totalItems: number = 0;
  // public totalAmount: number = 0;


  ngOnInit() {
    this.initForm();
    this.cartData = this.productlistService.cartData;

    this.totalItems = this.dataService.totalItems;
    this.totalAmount = this.dataService.totalAmount;
    this.taxamount = this.dataService.taxamount;
    this.discountedAmount = this.dataService.discountedAmount;
    this.generateSerialNumber();

  }

  initForm() {
    this.form = this.fb.group({
      saleNo: [this.generateRandomNumber(), Validators.required],
      dateTime: [this.getCurrentDateTime(), Validators.required],
      sno: [this.generateSerialNumber(), Validators.required],
    });
  }

  onClosePopup() {
    this.closePopup.emit();
    window.location.reload();
  }

  generateRandomNumber(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }


  generateSerialNumber(): void {
    this.serialNumbers.push(this.serialNumbers.length + 1);
  }

  getCurrentDateTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }


}
