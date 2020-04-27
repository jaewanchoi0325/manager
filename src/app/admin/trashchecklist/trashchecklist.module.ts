import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TrashchecklistPageRoutingModule } from "./trashchecklist-routing.module";

import { TrashchecklistPage } from "./trashchecklist.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashchecklistPageRoutingModule,
  ],
  declarations: [TrashchecklistPage],
})
export class TrashchecklistPageModule {}
