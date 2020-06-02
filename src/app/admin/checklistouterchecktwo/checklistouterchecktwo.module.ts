import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChecklistouterchecktwoPageRoutingModule } from "./checklistouterchecktwo-routing.module";

import { ChecklistouterchecktwoPage } from "./checklistouterchecktwo.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistouterchecktwoPageRoutingModule,
  ],
  declarations: [ChecklistouterchecktwoPage],
})
export class ChecklistouterchecktwoPageModule {}
