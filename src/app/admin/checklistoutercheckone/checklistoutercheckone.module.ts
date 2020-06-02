import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChecklistoutercheckonePageRoutingModule } from "./checklistoutercheckone-routing.module";

import { ChecklistoutercheckonePage } from "./checklistoutercheckone.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistoutercheckonePageRoutingModule,
  ],
  declarations: [ChecklistoutercheckonePage],
})
export class ChecklistoutercheckonePageModule {}
