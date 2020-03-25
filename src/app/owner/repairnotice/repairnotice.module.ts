import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairnoticePageRoutingModule } from './repairnotice-routing.module';

import { RepairnoticePage } from './repairnotice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairnoticePageRoutingModule
  ],
  declarations: [RepairnoticePage]
})
export class RepairnoticePageModule {}
