import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingvisitlistPageRoutingModule } from './parkingvisitlist-routing.module';

import { ParkingvisitlistPage } from './parkingvisitlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingvisitlistPageRoutingModule
  ],
  declarations: [ParkingvisitlistPage]
})
export class ParkingvisitlistPageModule {}
