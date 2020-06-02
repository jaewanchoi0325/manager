import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckfourPageRoutingModule } from './checklistinnercheckfour-routing.module';

import { ChecklistinnercheckfourPage } from './checklistinnercheckfour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnercheckfourPageRoutingModule
  ],
  declarations: [ChecklistinnercheckfourPage]
})
export class ChecklistinnercheckfourPageModule {}
