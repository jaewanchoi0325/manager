import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ControlextenddetailPageRoutingModule } from "./controlextenddetail-routing.module";

import { ControlextenddetailPage } from "./controlextenddetail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlextenddetailPageRoutingModule
  ],
  declarations: [ControlextenddetailPage]
})
export class ControlextenddetailPageModule {}
