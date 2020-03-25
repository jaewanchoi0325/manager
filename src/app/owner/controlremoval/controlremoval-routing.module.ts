import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ControlremovalPage } from "./controlremoval.page";

const routes: Routes = [
  {
    path: "",
    component: ControlremovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlremovalPageRoutingModule {}
