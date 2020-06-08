import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistfixaPageRoutingModule } from './checklistfixa-routing.module';

import { ChecklistfixaPage } from './checklistfixa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistfixaPageRoutingModule
  ],
  declarations: [ChecklistfixaPage]
})
export class ChecklistfixaPageModule {}
