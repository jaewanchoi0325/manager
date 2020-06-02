import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistfixPageRoutingModule } from './checklistfix-routing.module';

import { ChecklistfixPage } from './checklistfix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistfixPageRoutingModule
  ],
  declarations: [ChecklistfixPage]
})
export class ChecklistfixPageModule {}
