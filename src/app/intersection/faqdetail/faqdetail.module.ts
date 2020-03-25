import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqdetailPageRoutingModule } from './faqdetail-routing.module';

import { FaqdetailPage } from './faqdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqdetailPageRoutingModule
  ],
  declarations: [FaqdetailPage]
})
export class FaqdetailPageModule {}
