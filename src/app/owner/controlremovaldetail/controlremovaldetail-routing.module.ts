import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ControlremovaldetailPage } from "./controlremovaldetail.page";

const routes: Routes = [
  {
    path: "",
    component: ControlremovaldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlremovaldetailPageRoutingModule {}
