import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractextensionPageRoutingModule } from './contractextension-routing.module';

import { ContractextensionPage } from './contractextension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractextensionPageRoutingModule
  ],
  declarations: [ContractextensionPage]
})
export class ContractextensionPageModule {}
