import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractremovalPageRoutingModule } from './contractremoval-routing.module';

import { ContractremovalPage } from './contractremoval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractremovalPageRoutingModule
  ],
  declarations: [ContractremovalPage]
})
export class ContractremovalPageModule {}
