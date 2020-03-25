import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashdetailPageRoutingModule } from './trashdetail-routing.module';

import { TrashdetailPage } from './trashdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashdetailPageRoutingModule
  ],
  declarations: [TrashdetailPage]
})
export class TrashdetailPageModule {}
