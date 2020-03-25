import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ControlextendPageRoutingModule } from "./controlextend-routing.module";

import { ControlextendPage } from "./controlextend.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlextendPageRoutingModule
  ],
  declarations: [ControlextendPage]
})
export class ControlextendPageModule {}
