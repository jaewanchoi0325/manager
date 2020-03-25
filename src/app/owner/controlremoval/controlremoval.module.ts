import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ControlremovalPageRoutingModule } from "./controlremoval-routing.module";

import { ControlremovalPage } from "./controlremoval.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlremovalPageRoutingModule
  ],
  declarations: [ControlremovalPage]
})
export class ControlremovalPageModule {}
