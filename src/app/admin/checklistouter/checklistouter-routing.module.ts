import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChecklistouterPage } from "./checklistouter.page";

const routes: Routes = [
  {
    path: "",
    component: ChecklistouterPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistouterPageRoutingModule {}
