import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenteropiniondetailPageRoutingModule } from './renteropiniondetail-routing.module';

import { RenteropiniondetailPage } from './renteropiniondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenteropiniondetailPageRoutingModule
  ],
  declarations: [RenteropiniondetailPage]
})
export class RenteropiniondetailPageModule {}
