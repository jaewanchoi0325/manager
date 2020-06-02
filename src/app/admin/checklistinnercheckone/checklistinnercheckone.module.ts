import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChecklistinnercheckonePageRoutingModule } from "./checklistinnercheckone-routing.module";

import { ChecklistinnercheckonePage } from "./checklistinnercheckone.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistinnercheckonePageRoutingModule,
  ],
  declarations: [ChecklistinnercheckonePage],
})
export class ChecklistinnercheckonePageModule {}
