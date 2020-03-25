import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OwneropinionPage } from "./owneropinion.page";

const routes: Routes = [
  {
    path: "",
    component: OwneropinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwneropinionPageRoutingModule {}
