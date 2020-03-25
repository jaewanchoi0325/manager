import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OwneropinionPageRoutingModule } from "./owneropinion-routing.module";

import { OwneropinionPage } from "./owneropinion.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwneropinionPageRoutingModule
  ],
  declarations: [OwneropinionPage]
})
export class OwneropinionPageModule {}
