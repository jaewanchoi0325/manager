import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RegisterownerPageRoutingModule } from "./registerowner-routing.module";

import { RegisterownerPage } from "./registerowner.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterownerPageRoutingModule,
  ],
  declarations: [RegisterownerPage],
})
export class RegisterownerPageModule {}
