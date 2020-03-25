import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairnoticedetailPageRoutingModule } from './repairnoticedetail-routing.module';

import { RepairnoticedetailPage } from './repairnoticedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairnoticedetailPageRoutingModule
  ],
  declarations: [RepairnoticedetailPage]
})
export class RepairnoticedetailPageModule {}
