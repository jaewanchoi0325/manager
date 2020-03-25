import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketsellPageRoutingModule } from './marketsell-routing.module';

import { MarketsellPage } from './marketsell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketsellPageRoutingModule
  ],
  declarations: [MarketsellPage]
})
export class MarketsellPageModule {}
