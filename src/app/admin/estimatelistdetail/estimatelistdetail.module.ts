import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatelistdetailPageRoutingModule } from './estimatelistdetail-routing.module';

import { EstimatelistdetailPage } from './estimatelistdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatelistdetailPageRoutingModule
  ],
  declarations: [EstimatelistdetailPage]
})
export class EstimatelistdetailPageModule {}
