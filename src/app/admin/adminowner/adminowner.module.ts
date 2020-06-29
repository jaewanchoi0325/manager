import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminownerPageRoutingModule } from "./adminowner-routing.module";

import { AdminownerPage } from "./adminowner.page";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AdminownerPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminownerPageRoutingModule,
  ],
  declarations: [AdminownerPage],
})
export class AdminownerPageModule {}
