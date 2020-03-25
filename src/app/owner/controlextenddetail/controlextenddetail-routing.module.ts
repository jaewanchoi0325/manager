import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ControlextenddetailPage } from "./controlextenddetail.page";

const routes: Routes = [
  {
    path: "",
    component: ControlextenddetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlextenddetailPageRoutingModule {}
