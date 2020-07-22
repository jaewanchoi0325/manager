import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { IonicSelectableModule } from "ionic-selectable";

import { ManagerbuildingPageRoutingModule } from "./managerbuilding-routing.module";

import { ManagerbuildingPage } from "./managerbuilding.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ManagerbuildingPageRoutingModule,
  ],
  declarations: [ManagerbuildingPage],
})
export class ManagerbuildingPageModule {}
