import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { FeaturesComponent } from './features/features.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceiptPopupComponent } from './receipt-popup/receipt-popup.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RightSideComponent,
    LeftSideComponent,
    FeaturesComponent,
    ReceiptPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
