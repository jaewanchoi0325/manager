import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwneropiniondetailPageRoutingModule } from './owneropiniondetail-routing.module';

import { OwneropiniondetailPage } from './owneropiniondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwneropiniondetailPageRoutingModule
  ],
  declarations: [OwneropiniondetailPage]
})
export class OwneropiniondetailPageModule {}
