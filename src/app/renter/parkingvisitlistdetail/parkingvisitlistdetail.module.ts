import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingvisitlistdetailPageRoutingModule } from './parkingvisitlistdetail-routing.module';

import { ParkingvisitlistdetailPage } from './parkingvisitlistdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingvisitlistdetailPageRoutingModule
  ],
  declarations: [ParkingvisitlistdetailPage]
})
export class ParkingvisitlistdetailPageModule {}
