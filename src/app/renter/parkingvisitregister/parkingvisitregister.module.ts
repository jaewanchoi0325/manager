import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingvisitregisterPageRoutingModule } from './parkingvisitregister-routing.module';

import { ParkingvisitregisterPage } from './parkingvisitregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingvisitregisterPageRoutingModule
  ],
  declarations: [ParkingvisitregisterPage]
})
export class ParkingvisitregisterPageModule {}
