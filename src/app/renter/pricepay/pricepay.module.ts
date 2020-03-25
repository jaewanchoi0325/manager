import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricepayPageRoutingModule } from './pricepay-routing.module';

import { PricepayPage } from './pricepay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricepayPageRoutingModule
  ],
  declarations: [PricepayPage]
})
export class PricepayPageModule {}
