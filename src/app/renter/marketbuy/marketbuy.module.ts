import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketbuyPageRoutingModule } from './marketbuy-routing.module';

import { MarketbuyPage } from './marketbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketbuyPageRoutingModule
  ],
  declarations: [MarketbuyPage]
})
export class MarketbuyPageModule {}
