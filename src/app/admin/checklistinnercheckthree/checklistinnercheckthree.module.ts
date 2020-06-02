import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckthreePageRoutingModule } from './checklistinnercheckthree-routing.module';

import { ChecklistinnercheckthreePage } from './checklistinnercheckthree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnercheckthreePageRoutingModule
  ],
  declarations: [ChecklistinnercheckthreePage]
})
export class ChecklistinnercheckthreePageModule {}
