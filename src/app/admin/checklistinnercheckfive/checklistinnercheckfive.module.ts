import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckfivePageRoutingModule } from './checklistinnercheckfive-routing.module';

import { ChecklistinnercheckfivePage } from './checklistinnercheckfive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnercheckfivePageRoutingModule
  ],
  declarations: [ChecklistinnercheckfivePage]
})
export class ChecklistinnercheckfivePageModule {}
