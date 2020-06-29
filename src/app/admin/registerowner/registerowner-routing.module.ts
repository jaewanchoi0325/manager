import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterownerPage } from "./registerowner.page";

const routes: Routes = [
  {
    path: "",
    component: RegisterownerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterownerPageRoutingModule {}
