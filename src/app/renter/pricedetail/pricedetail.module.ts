import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricedetailPageRoutingModule } from './pricedetail-routing.module';

import { PricedetailPage } from './pricedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricedetailPageRoutingModule
  ],
  declarations: [PricedetailPage]
})
export class PricedetailPageModule {}
