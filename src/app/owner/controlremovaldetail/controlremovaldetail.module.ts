import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ControlremovaldetailPageRoutingModule } from "./controlremovaldetail-routing.module";

import { ControlremovaldetailPage } from "./controlremovaldetail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlremovaldetailPageRoutingModule
  ],
  declarations: [ControlremovaldetailPage]
})
export class ControlremovaldetailPageModule {}
