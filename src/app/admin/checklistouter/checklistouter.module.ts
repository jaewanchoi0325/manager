import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChecklistouterPageRoutingModule } from "./checklistouter-routing.module";

import { ChecklistouterPage } from "./checklistouter.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistouterPageRoutingModule,
  ],
  declarations: [ChecklistouterPage],
})
export class ChecklistouterPageModule {}
