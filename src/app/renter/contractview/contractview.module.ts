import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractviewPageRoutingModule } from './contractview-routing.module';

import { ContractviewPage } from './contractview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractviewPageRoutingModule
  ],
  declarations: [ContractviewPage]
})
export class ContractviewPageModule {}
