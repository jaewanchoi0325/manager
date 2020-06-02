import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistinnerchecktwoPageRoutingModule } from './checklistinnerchecktwo-routing.module';

import { ChecklistinnerchecktwoPage } from './checklistinnerchecktwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnerchecktwoPageRoutingModule
  ],
  declarations: [ChecklistinnerchecktwoPage]
})
export class ChecklistinnerchecktwoPageModule {}
