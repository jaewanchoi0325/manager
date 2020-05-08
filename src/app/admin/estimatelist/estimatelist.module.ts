import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatelistPageRoutingModule } from './estimatelist-routing.module';

import { EstimatelistPage } from './estimatelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatelistPageRoutingModule
  ],
  declarations: [EstimatelistPage]
})
export class EstimatelistPageModule {}
