import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistfixbPageRoutingModule } from './checklistfixb-routing.module';

import { ChecklistfixbPage } from './checklistfixb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistfixbPageRoutingModule
  ],
  declarations: [ChecklistfixbPage]
})
export class ChecklistfixbPageModule {}
