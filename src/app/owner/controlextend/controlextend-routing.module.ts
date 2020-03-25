import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ControlextendPage } from "./controlextend.page";

const routes: Routes = [
  {
    path: "",
    component: ControlextendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlextendPageRoutingModule {}
