import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistinnerPageRoutingModule } from './checklistinner-routing.module';

import { ChecklistinnerPage } from './checklistinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnerPageRoutingModule
  ],
  declarations: [ChecklistinnerPage]
})
export class ChecklistinnerPageModule {}
