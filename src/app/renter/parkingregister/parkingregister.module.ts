import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingregisterPageRoutingModule } from './parkingregister-routing.module';

import { ParkingregisterPage } from './parkingregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingregisterPageRoutingModule
  ],
  declarations: [ParkingregisterPage]
})
export class ParkingregisterPageModule {}
